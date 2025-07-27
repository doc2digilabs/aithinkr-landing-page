import React from 'react';
import { NavigationBar } from '../layout/NavigationBar';
import Footer from '../layout/Footer';
import Breadcrumbs from '../layout/Breadcrumbs';

interface CoursesLayoutProps {
  children: React.ReactNode;
}

const CoursesLayout: React.FC<CoursesLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar />
      <Breadcrumbs />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default CoursesLayout;
