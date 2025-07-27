import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';
import { Course, courses as staticCourses } from '../../lib/courseData';
import { CheckCircle, Lock, ChevronDown } from 'lucide-react';
import CoursesLayout from '@/components/courses/Layout';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const CoursePlayer: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [session, setSession] = useState<any>(null);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [activeLesson, setActiveLesson] = useState<string | null>(null);
  const [openModule, setOpenModule] = useState<number | null>(null);

  useEffect(() => {
    const getInitialData = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      setSession(sessionData.session);

      if (!sessionData.session) {
        navigate('/auth');
        return;
      }

      const foundCourse = staticCourses.find((c) => c.id === courseId);
      if (foundCourse) {
        setCourse(foundCourse);
        setIsEnrolled(true);
        setCompletedLessons([]);
        const firstTopic = foundCourse.curriculum[0]?.topics[0];
        setActiveLesson(firstTopic || null);
        setOpenModule(foundCourse.curriculum[0]?.module || null);
      } else {
        navigate('/courses');
      }
      setLoading(false);
    };

    getInitialData();
  }, [courseId, navigate]);

  const handleLessonClick = (topic: string) => {
    setActiveLesson(topic);
  };

  const handleMarkAsCompleted = (topic: string) => {
    if (!completedLessons.includes(topic)) {
      setCompletedLessons([...completedLessons, topic]);
    }
  };

  if (loading) {
    return <div className="text-center py-12">Loading course...</div>;
  }

  if (!isEnrolled) {
    return (
      <div className="text-center py-12">
        You are not enrolled in this course.
      </div>
    );
  }

  if (!course) {
    return <div className="text-center py-12">Course not found.</div>;
  }

  return (
    <CoursesLayout>
      <div className="flex bg-gray-100">
        {/* Sidebar */}
        <div className="w-1/4 bg-white border-r overflow-y-auto">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">{course.title}</h2>
          </div>
          <nav className="space-y-2 p-4">
            {course.curriculum.map((module) => (
              <Collapsible
                key={module.module}
                open={openModule === module.module}
                onOpenChange={() => setOpenModule(openModule === module.module ? null : module.module)}
              >
                <CollapsibleTrigger className="w-full text-left">
                  <div className="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-md hover:bg-gray-100">
                    <h3 className="text-lg font-bold">
                      {module.title}
                    </h3>
                    <ChevronDown className={`h-5 w-5 transition-transform ${openModule === module.module ? 'rotate-180' : ''}`} />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul className="py-2">
                    {module.topics.map((topic) => (
                      <li
                        key={topic}
                        className={`flex items-center justify-between pl-8 pr-4 py-3 cursor-pointer ${
                          activeLesson === topic ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-50'
                        }`}
                        onClick={() => handleLessonClick(topic)}
                      >
                        <span>{topic}</span>
                        {completedLessons.includes(topic) ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <Lock className="w-5 h-5 text-gray-400" />
                        )}
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="w-3/4 p-12 overflow-y-auto">
          {activeLesson ? (
            <div>
              <h1 className="text-3xl font-bold mb-6">{activeLesson}</h1>
              <div className="prose lg:prose-xl">
                <p>
                  This is the content for the lesson: <strong>{activeLesson}</strong>.
                  In a real application, this would be fetched from a database and could include text, videos, and interactive exercises.
                </p>
              </div>
              <button
                onClick={() => handleMarkAsCompleted(activeLesson)}
                className="mt-8 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Mark as Completed
              </button>
            </div>
          ) : (
            <div className="text-center">
              <h1 className="text-2xl">Select a lesson to begin.</h1>
            </div>
          )}
        </div>
      </div>
    </CoursesLayout>
  );
};

export default CoursePlayer;
