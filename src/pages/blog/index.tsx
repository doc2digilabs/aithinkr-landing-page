
import Header from "@/components/blog/Header";
import HeroSection from "@/components/blog/HeroSection";
import BlogPosts from "@/components/blog/BlogPosts";
import Footer from "@/components/blog/Footer";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BlogPosts />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
