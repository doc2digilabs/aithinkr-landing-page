import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { User, BookOpen, CheckSquare, PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { courses as staticCourses, Course } from "@/lib/courseData";
import { Skeleton } from "@/components/ui/skeleton";

interface EnrolledCourseWithProgress extends Course {
  progress: number;
}

export function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [enrolledCourses, setEnrolledCourses] = useState<EnrolledCourseWithProgress[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
        
        const { data: enrolled, error } = await supabase
          .from('user_courses')
          .select('course_id')
          .eq('user_id', user.id);

        if (error) {
          console.error("Error fetching enrolled courses:", error);
        } else if (enrolled) {
          const enrolledCourseIds = enrolled.map(e => e.course_id);
          
          const { data: progressData, error: progressError } = await supabase
            .from('user_course_progress')
            .select('course_id, topic_id')
            .eq('user_id', user.id);

          if (progressError) {
            console.error("Error fetching progress:", progressError);
          }

          const coursesWithProgress = staticCourses
            .filter(course => enrolledCourseIds.includes(course.id))
            .map(course => {
              const totalTopics = course.curriculum.flatMap(m => m.topics).length;
              const completedTopics = progressData?.filter(p => p.course_id === course.id).length || 0;
              const progress = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
              return { ...course, progress };
            });

          setEnrolledCourses(coursesWithProgress);
        }
      }
      setLoading(false);
    };
    fetchUserData();
  }, []);

  const renderLoadingState = () => (
    <div className="grid gap-6 md:grid-cols-2">
      {Array.from({ length: 2 }).map((_, i) => (
        <Card key={i}>
          <CardHeader>
            <Skeleton className="h-6 w-3/4" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-4 w-full mb-4" />
            <Skeleton className="h-10 w-full" />
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Welcome back, {user?.user_metadata?.name || user?.email}!</h1>
        <p className="text-muted-foreground">Here's a summary of your learning journey.</p>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">My Courses</h2>
        {loading ? renderLoadingState() : (
          enrolledCourses.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {enrolledCourses.map(course => (
                <Card key={course.id} className="flex flex-col">
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{course.shortDescription}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-4">
                    <img src={course.image} alt={course.title} className="rounded-md object-cover h-40 w-full"/>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <Label className="text-sm">Progress</Label>
                        <span className="text-xs font-semibold">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full"
                      onClick={() => navigate(`/courses/${course.id}/learn`)}
                    >
                      <BookOpen className="mr-2 h-4 w-4" />
                      {course.progress > 0 ? 'Continue Learning' : 'Start Course'}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="text-center py-12">
              <CardContent>
                <BookOpen className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold">No Courses Yet</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  You haven't enrolled in any courses. Let's change that!
                </p>
                <Button className="mt-4" onClick={() => navigate('/courses')}>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Explore Courses
                </Button>
              </CardContent>
            </Card>
          )
        )}
      </div>
    </div>
  );
}
