import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { supabase } from '@/lib/supabaseClient';
import { Course, courses as staticCourses } from '@/lib/courseData';
import { CheckCircle, PlayCircle, ChevronDown, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { toast } from 'sonner';
import { Layout } from '@/components/layout';
import { useAuth } from '@/hooks/useAuth';
import ReactPlayer from 'react-player';
import { Skeleton } from '@/components/ui/skeleton';

const CoursePlayer: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(new Set());
  const [activeTopic, setActiveTopic] = useState<{ name: string; videoUrl: string; } | null>(null);
  const [openModules, setOpenModules] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (authLoading) return;

    const getInitialData = async () => {
      if (!user) {
        toast.error("You must be signed in to view this page.");
        navigate('/auth');
        return;
      }

      const foundCourse = staticCourses.find((c) => c.id === courseId);
      if (!foundCourse) {
        toast.error("Course not found.");
        navigate('/courses');
        return;
      }
      
      const { data, error } = await supabase
        .from('user_courses')
        .select('course_id')
        .eq('user_id', user.id)
        .eq('course_id', foundCourse.id)
        .single();

      if (error && error.code !== 'PGRST116') {
        toast.error("Error verifying enrollment.", { description: error.message });
        navigate('/courses');
        return;
      }

      if (!data) {
        toast.error("You are not enrolled in this course.");
        navigate(`/courses/${courseId}`);
        return;
      }

      const { data: progressData, error: progressError } = await supabase
        .from('user_course_progress')
        .select('topic_id')
        .eq('user_id', user.id)
        .eq('course_id', foundCourse.id);

      if (progressError) {
        toast.error("Error fetching course progress.", { description: progressError.message });
      } else if (progressData) {
        setCompletedTopics(new Set(progressData.map(p => p.topic_id)));
      }

      setCourse(foundCourse);
      
      const firstTopic = foundCourse.curriculum[0]?.topics[0];
      setActiveTopic(firstTopic || null);
      setOpenModules(new Set([foundCourse.curriculum[0]?.module]));

      setLoading(false);
    };

    getInitialData();
  }, [courseId, navigate, user, authLoading]);

  const allTopics = useMemo(() => course?.curriculum.flatMap(m => m.topics) || [], [course]);

  const handleTopicClick = (topic: { name: string; videoUrl: string; }) => {
    setActiveTopic(topic);
  };

  const handleMarkAsCompleted = async () => {
    if (activeTopic && course && user) {
      const newCompleted = new Set(completedTopics);
      newCompleted.add(activeTopic.name);
      setCompletedTopics(newCompleted);

      const { error } = await supabase
        .from('user_course_progress')
        .insert({
          user_id: user.id,
          course_id: course.id,
          topic_id: activeTopic.name,
        });

      if (error) {
        toast.error("Failed to save progress.", { description: error.message });
        const revertedCompleted = new Set(completedTopics);
        revertedCompleted.delete(activeTopic.name);
        setCompletedTopics(revertedCompleted);
      } else {
        toast.success(`${activeTopic.name} marked as complete!`);
        const currentIndex = allTopics.findIndex(t => t.name === activeTopic.name);
        if (currentIndex < allTopics.length - 1) {
          setActiveTopic(allTopics[currentIndex + 1]);
        }
      }
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto py-10">
          <div className="flex gap-8">
            <div className="w-1/4">
              <Skeleton className="h-16 w-full mb-4" />
              <Skeleton className="h-96 w-full" />
            </div>
            <div className="w-3/4">
              <Skeleton className="h-96 w-full mb-6" />
              <Skeleton className="h-12 w-1/2" />
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!course) return null;

  return (
    <Layout>
      <div className="container mx-auto py-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full md:w-1/4">
            <div className="sticky top-24">
              <h1 className="text-2xl font-bold mb-4">{course.title}</h1>
              <nav className="border rounded-lg">
                {course.curriculum.map((module) => (
                  <Collapsible
                    key={module.module}
                    open={openModules.has(module.module)}
                    onOpenChange={(isOpen) => {
                      const newOpenModules = new Set(openModules);
                      if (isOpen) newOpenModules.add(module.module);
                      else newOpenModules.delete(module.module);
                      setOpenModules(newOpenModules);
                    }}
                    className="border-b last:border-b-0"
                  >
                    <CollapsibleTrigger className="w-full p-4 text-left hover:bg-gray-100">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">Module {module.module}: {module.title}</h3>
                        <ChevronDown className={`h-5 w-5 transition-transform ${openModules.has(module.module) ? 'rotate-180' : ''}`} />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <ul className="py-1">
                        {module.topics.map((topic) => (
                          <li key={topic.name}>
                            <button
                              onClick={() => handleTopicClick(topic)}
                              className={`w-full text-left flex items-center gap-3 px-6 py-3 text-sm ${
                                activeTopic?.name === topic.name ? 'bg-blue-100 text-blue-700 font-semibold' : 'hover:bg-gray-50'
                              }`}
                            >
                              {completedTopics.has(topic.name) ? (
                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                              ) : (
                                <PlayCircle className="h-5 w-5 text-gray-400 flex-shrink-0" />
                              )}
                              {topic.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="w-full md:w-3/4">
            {activeTopic ? (
              <>
                <div className="aspect-video rounded-lg mb-6 overflow-hidden">
                  <ReactPlayer
                    url={activeTopic.videoUrl}
                    width="100%"
                    height="100%"
                    controls
                  />
                </div>
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-bold">{activeTopic.name}</h2>
                  <Button onClick={handleMarkAsCompleted} disabled={completedTopics.has(activeTopic.name)}>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    {completedTopics.has(activeTopic.name) ? 'Completed' : 'Mark as Complete'}
                  </Button>
                </div>
                <div className="prose prose-lg max-w-none mt-4">
                  <p>This is the content for the lesson: <strong>{activeTopic.name}</strong>. In a real application, this would be fetched from a database and could include text, videos, and interactive exercises.</p>
                </div>
              </>
            ) : (
              <div className="text-center flex flex-col items-center justify-center h-full">
                <h1 className="text-2xl font-semibold">Welcome to {course.title}!</h1>
                <p className="text-muted-foreground mt-2">Select a topic from the sidebar to get started.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default CoursePlayer;

