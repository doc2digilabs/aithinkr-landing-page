import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { supabase } from "@/lib/supabaseClient";
import { Skeleton } from "@/components/ui/skeleton";

// Reflects the full profiles table schema
interface Profile {
  id: string;
  email: string;
  name: string | null;
  phone_no: string | null;
  role: string;
  student_stream: string | null;
  student_subject: string | null;
  professional_exp: string | null;
  company_name: string | null;
  created_at: string;
}

export function AdminDashboard() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfiles = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("profiles")
        .select("*") // Fetch all columns
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching profiles:", error);
      } else if (data) {
        setProfiles(data);
      }
      setLoading(false);
    };
    fetchProfiles();
  }, []);

  const renderLoadingRows = () => (
    Array.from({ length: 5 }).map((_, i) => (
      <TableRow key={`skeleton-${i}`}>
        <TableCell><Skeleton className="h-5 w-32" /></TableCell>
        <TableCell><Skeleton className="h-5 w-48" /></TableCell>
        <TableCell><Skeleton className="h-5 w-24" /></TableCell>
        <TableCell><Skeleton className="h-5 w-16" /></TableCell>
        <TableCell><Skeleton className="h-5 w-40" /></TableCell>
      </TableRow>
    ))
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Admin Dashboard</CardTitle>
        <CardDescription>View and manage all registered users.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? renderLoadingRows() : profiles.map((profile) => (
              <TableRow key={profile.id}>
                <TableCell className="font-medium">{profile.name || "N/A"}</TableCell>
                <TableCell>{profile.email}</TableCell>
                <TableCell>{profile.phone_no || "N/A"}</TableCell>
                <TableCell>
                  <Badge variant={profile.role === 'admin' ? 'destructive' : 'outline'}>
                    {profile.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  {profile.student_stream ? `${profile.student_stream} - ${profile.student_subject}` : 
                   profile.professional_exp ? `${profile.company_name} (${profile.professional_exp} yrs)` : 'N/A'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
