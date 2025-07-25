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

interface Registration {
  email: string;
  name: string | null;
  course_name: string | null;
  created_at: string;
  role: string;
}

export function AdminDashboard() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRegistrations = async () => {
      const { data, error } = await supabase
        .from("registrations")
        .select("email, name, course_name, created_at, role")
        .order("created_at", { ascending: false });

      if (data) {
        setRegistrations(data);
      }
      setLoading(false);
    };
    fetchRegistrations();
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
                {registrations.map((reg) => (
                <TableRow key={reg.email}>
                    <TableCell>{reg.email}</TableCell>
                    <TableCell>{reg.name || "N/A"}</TableCell>
                    <TableCell>{reg.course_name || "N/A"}</TableCell>
                    <TableCell>{new Date(reg.created_at).toLocaleDateString()}</TableCell>
                    <TableCell>
                        <Badge variant={reg.role === 'admin' ? 'default' : 'secondary'}>
                            {reg.role}
                        </Badge>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
  );
}
