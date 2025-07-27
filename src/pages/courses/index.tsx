import React from 'react';
import Courses from '../../components/courses/Courses';
import CoursesLayout from '../../components/courses/Layout';

const CoursesPage: React.FC = () => {
  return (
    <CoursesLayout>
      <Courses />
    </CoursesLayout>
  );
};

export default CoursesPage;
