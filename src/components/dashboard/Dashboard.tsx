import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { supabase } from "@/lib/supabaseClient";
import { User, BookOpen, CheckSquare } from "lucide-react";

export function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [stats, setStats] = useState({
    course: "",
    profileCompleteness: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
        const { data: registrationData } = await supabase
          .from("registrations")
          .select("course_name, name, phone_no")
          .eq("email", user.email)
          .single();

        if (registrationData) {
          let completeness = 50; // 50% for being registered
          if (registrationData.name) completeness += 25;
          if (registrationData.phone_no) completeness += 25;

          setStats({
            course: registrationData.course_name || "Not specified",
            profileCompleteness: completeness,
          });
        }
      }
      setLoading(false);
    };
    fetchUserData();
  }, []);

  if (loading) {
    return <p>Loading dashboard...</p>;
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Welcome back, {user?.user_metadata?.name || user?.email}!</h1>
        <p className="text-muted-foreground">Here's a summary of your learning journey.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Enrolled Course
            </CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.course}</div>
            <p className="text-xs text-muted-foreground">
              Your primary learning path
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Profile Completeness
            </CardTitle>
            <CheckSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.profileCompleteness}%</div>
            <p className="text-xs text-muted-foreground">
              Complete your profile for a better experience
            </p>
          </CardContent>
        </Card>
         <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Your Account</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold capitalize">
              {user?.aud || "Standard"}
            </div>
            <p className="text-xs text-muted-foreground">
              Account status
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
