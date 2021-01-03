import React from "react";
import winson1 from "../../../images/winson1.png";
import BlogDetail from "../BlogDetail/BlogDetail";

const blogData = [
  {
    title: "Check at least a doctor in a year for your teeth",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    author: "Dr. Cudi",
    authorImg: winson1,
    date: "23 April 2019",
  },
  {
    title: "Two time brush in a day can keep you healthy",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    author: "Dr. Sinthia",
    authorImg: winson1,
    date: "23 April 2019",
  },
  {
    title: "The tooth cancer is taking a challenge",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    author: "Dr. Cudi",
    authorImg: winson1,
    date: "23 April 2019",
  },
];

const Blog = () => {
  return (
    <section className="blog">
      <div className="text-center mt-5 pt-5">
        <h5 className="aqua-color">our blog</h5>
        <h2>From Our Blog News</h2>
      </div>
      <div className="blog-card d-flex justify-content-center">
        <div className="row w-75">
          {blogData.map((blog) => (
            <BlogDetail blog={blog}></BlogDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
