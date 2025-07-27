import React from 'react';
import { Course } from '../../lib/courseData';
import { Button } from '../ui/button';

interface CourseCardProps {
  course: Course;
  onClick: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
      onClick={onClick}
    >
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {course.title}
        </h3>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{course.duration}</span>
          <span>{course.level}</span>
        </div>
        <Button className="w-full mt-4">View Course</Button>
      </div>
    </div>
  );
};

export default CourseCard;
