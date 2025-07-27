import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";
import { User, BookOpen, CheckSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

// This should be in a separate types file
interface EnrolledCourse {
  id: string;
  title: string;
  description: string;
  progress: number;
}

export function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [enrolledCourses, setEnrolledCourses] = useState<EnrolledCourse[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
        // In a real app, you would fetch enrolled courses from the DB
        // For now, we'll use placeholder data
        setEnrolledCourses([
          { id: 'claude-with-the-anthropic-api', title: 'Claude with the Anthropic API', description: 'Learn to use the powerful Claude large language model via the Anthropic API.', progress: 25 },
          { id: 'introduction-to-prompt-engineering', title: 'Introduction to Prompt Engineering', description: 'Master the art of crafting effective prompts for large language models.', progress: 0 },
        ]);
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
      
      <div>
        <h2 className="text-2xl font-bold mb-4">My Courses</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {enrolledCourses.map(course => (
            <Card key={course.id}>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{course.description}</p>
                <div className="flex items-center justify-between">
                  <Progress value={course.progress} className="w-3/4" />
                  <span className="text-sm font-medium">{course.progress}%</span>
                </div>
                <Button 
                  className="mt-4 w-full"
                  onClick={() => navigate(`/courses/${course.id}/learn`)}
                >
                  {course.progress > 0 ? 'Continue Learning' : 'Start Course'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Courses Completed
            </CardTitle>
            <CheckSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">
              Keep up the great work!
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
