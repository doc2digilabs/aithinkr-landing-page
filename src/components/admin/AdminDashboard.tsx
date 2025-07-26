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
import { supabase } from "@/lib/supabaseClient";

interface Profile {
  email: string;
  name: string | null;
  course_name: string | null;
  created_at: string;
  role: string;
}

export function AdminDashboard() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfiles = async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("email, name, course_name, created_at, role")
        .order("created_at", { ascending: false });

      if (data) {
        setProfiles(data);
      }
      setLoading(false);
    };
    fetchProfiles();
  }, []);

  if (loading) {
    return <p>Loading user data...</p>;
  }

  return (
    <div className="space-y-8">
        <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage registered users.</p>
        </div>
        <Table>
            <TableHeader>
                <TableRow>
                <TableHead>Email</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Registered On</TableHead>
                <TableHead>Role</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {profiles.map((profile) => (
                <TableRow key={profile.email}>
                    <TableCell>{profile.email}</TableCell>
                    <TableCell>{profile.name || "N/A"}</TableCell>
                    <TableCell>{profile.course_name || "N/A"}</TableCell>
                    <TableCell>{new Date(profile.created_at).toLocaleDateString()}</TableCell>
                    <TableCell>
                        <Badge variant={profile.role === 'admin' ? 'default' : 'secondary'}>
                            {profile.role}
                        </Badge>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
  );
}
