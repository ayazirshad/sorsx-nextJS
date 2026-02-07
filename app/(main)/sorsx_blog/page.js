"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./sorsx_blog.css";
import { blogData } from "@/lib/blogData";

const SorsxBlog = () => {
  const [blogs, setBlogs] = useState(blogData);
  return (
    <>
      {/* hero section  */}
      <main>
        {/* Newsroom Header */}
        <section className="newsroom-header padding-y">
          <div className="container">
            <h1 className="newsroom-title">SorsX Newsroom</h1>
            <p className="newsroom-subtitle">
              The latest news, announcements, lessons and learnings from SorsX
            </p>
          </div>
        </section>

        {/* Blog Grid Section */}
        <section className="blog-grid-section padding-y">
          <div className="container">
            <div className="blog-grid">
              {blogs?.map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blog_detail?id=${blog.id}`}
                  className="blog-card"
                >
                  <div className="blog-card-image-wrapper">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="blog-card-image"
                    />
                    <span className="blog-card-date-badge">{blog.date}</span>
                  </div>
                  <div className="blog-card-content">
                    <span className="blog-card-category">{blog.category}</span>
                    <h3 className="blog-card-title">{blog.title}</h3>
                    {/* Uncomment if you want description */}
                    <p className="blog-card-description">{blog.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SorsxBlog;
