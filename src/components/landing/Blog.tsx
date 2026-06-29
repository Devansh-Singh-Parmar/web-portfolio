import { getPublishedBlogPosts } from "@/lib/blog";
import { Link } from "next-view-transitions";
import React from "react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { Button } from "../ui/button";
import { BlogCard } from "../blog/BlogCard";

export default function Blog() {
  const posts = getPublishedBlogPosts();
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Featured" heading="Blogs" />
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {posts.slice(0, 1).map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
      <div className="mt-8 flex justify-center ">
        <Button variant="outline">
          <Link href="/blog">View All Blogs</Link>
        </Button>
      </div>
    </Container>
  );
}
