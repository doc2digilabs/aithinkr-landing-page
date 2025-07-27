import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';
import { Button } from '../ui/button';
import { CheckCircle } from 'lucide-react';
import { Course, courses as staticCourses } from '../../lib/courseData';
import { toast } from 'sonner';

const CourseDetail: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      // In a real app, you'd fetch this from your DB
      const foundCourse = staticCourses.find((c) => c.id === courseId);
      if (foundCourse) {
        setCourse(foundCourse);
      }
      setLoading(false);
    };

    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
    };

    fetchCourse();
    getSession();
  }, [courseId]);

  useEffect(() => {
    const checkEnrollment = async () => {
      if (session?.user && course) {
        // This is a placeholder for fetching from the DB
        // In a real implementation, you would query your 'enrollments' table
        setIsEnrolled(false); // Replace with actual DB check
      }
    };
    checkEnrollment();
  }, [session, course]);

  const handleEnroll = async () => {
    if (!session?.user) {
      navigate('/auth');
      return;
    }

    // Placeholder for enrollment logic
    toast.success('Successfully enrolled!');
    setIsEnrolled(true);
    // In a real implementation, you would insert into your 'enrollments' table
  };

  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  if (!course) {
    return <div className="text-center py-12">Course not found.</div>;
  }

  const renderEnrollButton = () => {
    if (!session?.user) {
      return (
        <Button onClick={() => navigate('/auth')} className="w-full mt-6 text-lg py-3">
          Sign in to Enroll
        </Button>
      );
    }
    if (isEnrolled) {
      return (
        <Button
          onClick={() => navigate(`/courses/${course.id}/learn`)}
          className="w-full mt-6 text-lg py-3"
        >
          Start Learning
        </Button>
      );
    }
    return (
      <Button onClick={handleEnroll} className="w-full mt-6 text-lg py-3">
        Enroll Now
      </Button>
    );
  };

  return (
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
              <div className="space-y-4">
                {course.curriculum.map((module) => (
                  <div
                    key={module.module}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <h3 className="text-lg font-semibold text-gray-800">
                      Module {module.module}: {module.title}
                    </h3>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                      {module.topics.map((topic, index) => (
                        <li key={index}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:w-1/3 mt-12 lg:mt-0">
            <div className="sticky top-24 bg-gray-50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Course Details
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
  );
};

export default CourseDetail;
