import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import * as React from "react";

const blogPosts = [
  {
    title: "The Future of Generative AI",
    author: "John Doe",
    date: "October 26, 2023",
  },
  {
    title: "How to Build a Chatbot with AiThinkr",
    author: "Jane Doe",
    date: "October 25, 2023",
  },
  {
    title: "The Ethics of AI",
    author: "John Doe",
    date: "October 24, 2023",
  },
  {
    title: "The Rise of Multimodal AI",
    author: "Jane Doe",
    date: "October 23, 2023",
  },
  {
    title: "AI for Science: A New Era of Discovery",
    author: "John Doe",
    date: "October 22, 2023",
  },
  {
    title: "The Importance of AI Safety",
    author: "Jane Doe",
    date: "October 21, 2023",
  },
  {
    title: "How to Get Started with Generative AI",
    author: "John Doe",
    date: "October 20, 2023",
  },
  {
    title: "The Top 10 Generative AI Models",
    author: "Jane Doe",
    date: "October 19, 2023",
  },
  {
    title: "The Future of Work in the Age of AI",
    author: "John Doe",
    date: "October 18, 2023",
  },
];

const BlogPosts = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const postsPerPage = 6;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const handleClick = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedPosts = blogPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.map((post, index) => (
              <div
                key={index}
                className="bg-gradient-card rounded-xl p-8 shadow-tech hover:shadow-ai transition-all duration-300 hover:-translate-y-2 border border-border"
              >
                <h3 className="text-xl font-semibold mb-3 font-display">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {post.author} &middot; {post.date}
                </p>
                <Button variant="outline">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(Math.max(1, currentPage - 1));
                    }}
                  />
                </PaginationItem>
                {[...Array(totalPages)].map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      href="#"
                      isActive={currentPage === i + 1}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(i + 1);
                      }}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(Math.min(totalPages, currentPage + 1));
                    }}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;