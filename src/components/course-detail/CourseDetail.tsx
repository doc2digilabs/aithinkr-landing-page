import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';
import { Button } from '../ui/button';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { Course, courses as staticCourses } from '../../lib/courseData';
import { toast } from 'sonner';
import { Session } from '@supabase/supabase-js';
import { RazorpayDialog } from './RazorpayDialog';

const CourseDetail: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const [isPaymentDialogOpen, setPaymentDialogOpen] = useState(false);

  const checkEnrollment = useCallback(async (user: any, currentCourse: Course) => {
    if (!user || !currentCourse) return;
    
    const { data, error } = await supabase
      .from('user_courses')
      .select('course_id')
      .eq('user_id', user.id)
      .eq('course_id', currentCourse.id)
      .single();

    if (error && error.code !== 'PGRST116') {
      console.error("Error checking enrollment:", error);
    }
    
    setIsEnrolled(!!data);
  }, []);

  useEffect(() => {
    const fetchInitialData = async () => {
      setLoading(true);
      
      const foundCourse = staticCourses.find((c) => c.id === courseId);
      if (foundCourse) {
        setCourse(foundCourse);
      } else {
        setLoading(false);
        return;
      }

      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);

      if (session?.user && foundCourse) {
        await checkEnrollment(session.user, foundCourse);
      }
      
      setLoading(false);
    };

    fetchInitialData();
  }, [courseId, checkEnrollment]);

  const enrollUser = async () => {
    if (!session?.user || !course) return;

    setLoading(true);
    const { error } = await supabase
      .from('user_courses')
      .insert({ user_id: session.user.id, course_id: course.id });

    if (error) {
      toast.error("Enrollment failed", { description: error.message, icon: <AlertCircle /> });
    } else {
      toast.success(`Successfully enrolled in ${course.title}!`);
      setIsEnrolled(true);
    }
    setLoading(false);
  };

  const handleEnrollClick = () => {
    if (!session?.user) {
      navigate('/auth');
      return;
    }
    if (course?.isFree) {
      enrollUser();
    } else {
      setPaymentDialogOpen(true);
    }
  };

  const handlePaymentSuccess = () => {
    setPaymentDialogOpen(false);
    enrollUser();
  };

  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  if (!course) {
    return <div className="text-center py-12">Course not found.</div>;
  }

  const renderEnrollButton = () => {
    if (isEnrolled) {
      return (
        <Button
          onClick={() => navigate(`/courses/${course.id}/learn`)}
          className="w-full mt-6 text-lg py-3"
        >
          Go to Course
        </Button>
      );
    }
    return (
      <Button onClick={handleEnrollClick} className="w-full mt-6 text-lg py-3" disabled={loading}>
        {loading ? 'Processing...' : 'Enroll Now'}
      </Button>
    );
  };

  return (
    <>
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="lg:flex lg:space-x-12">
            {/* Left Side */}
            <div className="lg:w-2/3">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-80 object-cover rounded-lg mb-8"
              />
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                {course.title}
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                {course.longDescription}
              </p>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  What You'll Learn
                </h2>
                <ul className="space-y-2">
                  {course.learningObjectives.map((objective, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                      <span className="text-gray-700">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Curriculum
                </h2>
                {/* ... curriculum mapping ... */}
              </div>
            </div>

            {/* Right Side */}
            <div className="lg:w-1/3 mt-12 lg:mt-0">
              <div className="sticky top-24 bg-gray-50 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {course.isFree ? 'Free Course' : `₹${new Intl.NumberFormat('en-IN').format(course.price)}`}
                </h2>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between">
                    <span className="font-semibold">Duration:</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Level:</span>
                    <span>{course.level}</span>
                  </div>
                </div>
                {renderEnrollButton()}
              </div>
            </div>
          </div>
        </div>
      </div>
      {course && !course.isFree && (
        <RazorpayDialog
          isOpen={isPaymentDialogOpen}
          onClose={() => setPaymentDialogOpen(false)}
          onSuccess={handlePaymentSuccess}
          courseName={course.title}
          coursePrice={course.price}
          userName={session?.user?.user_metadata?.name || session?.user?.email || ''}
          userEmail={session?.user?.email || ''}
        />
      )}
    </>
  );
};

export default CourseDetail;
