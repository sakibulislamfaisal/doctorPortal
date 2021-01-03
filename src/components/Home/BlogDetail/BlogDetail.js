import React from "react";

const BlogDetail = ({ blog }) => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-5">
      <div className="card">
        <div className="card-body">
          <div className="d-flex align-items-center mt-2">
            <img
              src={blog.authorImg}
              className="img-fluid mx-3"
              style={{ height: "60px" }}
              alt=""
            />
            <div className="p-2 mt-3">
              <h6 style={{ color: "#1cc7c1" }}>{blog.author}</h6>
              <p className="text-secondary">{blog.date}</p>
            </div>
          </div>
          <div className="card-text mt-4">
            <h5 className="text-dark mb-3">{blog.title}</h5>
            <p className="text-muted text-justify mb-4">{blog.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
