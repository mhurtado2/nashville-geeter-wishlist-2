import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Blog = () => {
  const [blogs, setBlog] = useState([]);
  const [gears, setGear] = useState([]);

  const localWishListUser = localStorage.getItem("wishlist_user");
  const wishListUserObject = JSON.parse(localWishListUser);

  useEffect(() => {
    fetch("http://localhost:8088/gears")
      .then((res) => res.json())
      .then((gearArray) => {
        setGear(gearArray);
      });
  }, []);

  const getAllBlogs = () => {
    fetch("http://localhost:8088/blogs?_expand=gear")
      .then((res) => res.json())
      .then((blogArray) => {
        setBlog(blogArray);
      });
  };
  useEffect(() => {
   getAllBlogs()
  }, []);


  return (
    <div className="gear-container">
      {blogs.map((blog) => {
        return (
          <div className="item-card-blog" key={blog.id}>
            <div className="blog">
              <h3>Gear Item:</h3>
              {wishListUserObject.admin  ? (
                <Link to={`/blog/${blog.gearId}`}>{blog?.gear?.name}</Link>
              ) : (
                <>{blog?.gear?.name}</>
              )}
              <h3> Message:</h3>
              <div className="blog-name">{blog.edit}</div>

              {wishListUserObject.admin ? (
                <button
                  onClick={() => {
                    fetch(`http://localhost:8088/blogs/${blog.id}`, {
                      method: "DELETE",
                    }).then(() => {
                      getAllBlogs();
                    });
                  }}
                  className="gear_delete"
                >
                  Delete{" "}
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
