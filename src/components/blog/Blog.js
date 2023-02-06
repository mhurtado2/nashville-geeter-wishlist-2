import { useState, useEffect } from "react";
import { Form, Label, Input } from "reactstrap";

export const Blog = () => {
  const [userChoices, update] = useState({
    gearName: "",
    editNote: "",
  });

  const [gears, setGear] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8088/gears")
      .then((res) => res.json())
      .then((gearData) => {
        setGear(gearData);
      });
  }, []);

  const [blogs, setBlog] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8088/blogs")
      .then((res) => res.json())
      .then((blogArray) => {
        setBlog(blogArray);
      });
  }, []);

  const localWishListUser = localStorage.getItem("wishlist_user");
  const wishListUserObject = JSON.parse(localWishListUser);

  const handleSaveButtonClick = (event) => {
    event.preventDefault();
    // TODO: Create the object to be saved to the API
    // {
    //     "userId": 3,
    //     "description": "Saepe ex sapiente deserunt et voluptas fugiat vero quasi. Ipsam est non ipsa. Occaecati rerum ipsa consequuntur. Ratione commodi unde sint non rerum. Sit quia et aut sunt.",
    //     "emergency": false,
    //     "dateCompleted": "Fri Apr 29 2022 14:02:20 GMT-0500 (Central Daylight Time)"
    //   }
    const blogToSendToAPI = {
      userId: wishListUserObject.id,
      name: userChoices.gearName,
      edit: userChoices.editNote,
    };
    // TODO: Perform the fetch() to POST the object to the API
    return fetch("http://localhost:8088/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogToSendToAPI),
    })
      .then((response) => response.json())
      .then(() => {
        //  navigate("/blog")
      });
  };

  return (
    <>
    <div className="plsFlex">
      <Form className="GearForm">
        <div className="newGearFlex">
          <h3 className="gearForm__title"></h3>
          <img
            className="rock__img"
            src="https://media1.giphy.com/media/WpaVhEcp3Qo2TjwyI1/giphy.gif"
            alt="chandler saying no"
          />
        </div>

        <fieldset className="smallestFieldSet">
          <div className="form-group">
            <Label htmlFor="name">Name:</Label>
            <select
              required
              autoFocus
              className="form-control"
              value={userChoices.gearName}
              onChange={(event) => {
                const copy = { ...userChoices };
                copy.gearName = event.target.value;
                update(copy);
              }}
            >
              <option value="0">Gear Name</option>
              {gears.map((gearObj) => {
                return (
                  <option key={gearObj.id} value={gearObj.name}>
                    {gearObj.name}
                  </option>
                );
              })}
            </select>
          </div>
        </fieldset>

        <fieldset className="editFieldSet">
          <div className="form-group">
            <Label htmlFor="editNote">Edit Note:</Label>
            <Input
              required
              autoFocus
              type="textarea"
              className="form-control-edit"
              placeholder="Your wanted gear Edits"
              value={userChoices.editNote}
              onChange={(event) => {
                const copy = { ...userChoices };
                copy.editNote = event.target.value;
                update(copy);
              }}
            />
          </div>
        </fieldset>

        <button
          onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
          className="btn btn-primary btn-blog"
        >
          Submit Blog Post
        </button>
      </Form>

      <div className="gear-container">
        {blogs.map((blog) => {
          return (
            <div className="blog" key={blog.id}>
              <div className="blog">
                <div className="gear-name">{blog.name}</div>
                <div className="gear-name">${blog.edit}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
};
