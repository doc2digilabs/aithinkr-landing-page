import React from 'react';
import CourseDetail from '../../components/course-detail/CourseDetail';
import CoursesLayout from '../../components/courses/Layout';

const CourseDetailPage: React.FC = () => {
  return (
    <CoursesLayout>
      <CourseDetail />
    </CoursesLayout>
  );
};

export default CourseDetailPage;
