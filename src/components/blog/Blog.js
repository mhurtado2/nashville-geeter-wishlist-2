import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Blog = () => {
  const [blogs, setBlog] = useState([]);
  const [gears, setGear] = useState([]);


  useEffect(() => {
    fetch("http://localhost:8088/gears")
      .then((res) => res.json())
      .then((gearArray) => {
        setGear(gearArray);
      });
  }, []);


  useEffect(() => {
    fetch("http://localhost:8088/blogs")
      .then((res) => res.json())
      .then((blogArray) => {
        setBlog(blogArray);
      });
  }, []);

  return (
    <div className="blog-container">
      {blogs.map((blog) => {
        return (
          <div className="item-card-blog" key={blog.id}>
            <div className="blog">
            <Link to={`/edit/${blog.gearId}`}>
                 {blog.name}
            </Link>
              <div className="blog-name">{blog.edit}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
