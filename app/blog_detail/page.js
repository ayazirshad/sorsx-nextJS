"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { blogData } from "@/lib/blogData";
import "./blog_detail.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const BlogDetail = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const blogId = parseInt(searchParams.get("id"));

  // Find current blog
  const blog = blogData.find((b) => b.id === blogId);

  // Redirect to blog list if invalid id
  if (!blog) {
    if (typeof window !== "undefined") {
      router.push("/sorsx_blog");
    }
    return null;
  }

  // Get related blogs (exclude current, max 3)
  const relatedBlogs = blogData.filter((b) => b.id !== blogId).slice(0, 3);

  return (
    <>
      {/* header */}
      <Header />
      {/* hero */}
      <main>
        {/* Blog Hero Section */}
        {blog ? (
          <>
            <section className="blog-hero-section">
              <div className="container--hero">
                <div className="hero-flex-wrapper">
                  {/* Left Content */}
                  <div className="hero-text-column">
                    <nav className="breadcrumb-nav">
                      <Link href="/sorsx_blog">NEWSROOM</Link>
                      <span className="breadcrumb-separator">/</span>
                      <span className="current-page">BLOG</span>
                    </nav>

                    <h1 className="blog-detail-title">{blog.title}</h1>

                    <div className="blog-meta-pills">
                      <span className="blog-category-badge">
                        {blog.category}
                      </span>
                      <span className="blog-date-pill">{blog.date}</span>
                    </div>
                  </div>

                  {/* Right Content (Image) */}
                  <div className="hero-image-column">
                    <div className="hero-image-container">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="blog-featured-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Blog Body Content */}
            <section className="blog-content-section padding-y">
              <div className="container container--narrow">
                <div
                  className="blog-content-body"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                ></div>
              </div>
            </section>
          </>
        ) : (
          <div>no blogs</div>
        )}

        {/* Related Blogs */}
        {relatedBlogs?.length > 0 && (
          <section className="related-blogs-section padding-y">
            <div className="container">
              <h2 className="section-title">Related Posts</h2>
              <div className="blog-grid">
                {relatedBlogs.map((relBlog) => (
                  <Link
                    key={relBlog.id}
                    href={`/blog_detail?id=${relBlog.id}`}
                    className="blog-card"
                  >
                    <div className="blog-card-image-wrapper">
                      <img
                        src={relBlog.image}
                        alt={relBlog.title}
                        className="blog-card-image"
                      />
                      <span className="blog-card-date-badge">
                        {relBlog.date}
                      </span>
                    </div>
                    <div className="blog-card-content">
                      <span className="blog-card-category">
                        {relBlog.category}
                      </span>
                      <h3 className="blog-card-title">{relBlog.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      {/* footer */}
      <Footer />
    </>
  );
};

export default BlogDetail;
