import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Label, Input } from "reactstrap";

export const PleaseEdit = () => {
  const [userChoices, update] = useState({
    gearId: 0,
    editNote: "",
  });

  const [gears, setGear] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8088/gears?_sort=brand&_order=asc")
      .then((res) => res.json())
      .then((gearData) => {
        setGear(gearData);
      });
  }, []);

  const [blogs, setBlog] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8088/blogs?_expand=gear")
      .then((res) => res.json())
      .then((blogArray) => {
        setBlog(blogArray);
      });
  }, []);

  const localWishListUser = localStorage.getItem("wishlist_user");
  const wishListUserObject = JSON.parse(localWishListUser);

  const handleSaveButtonClick = (event) => {
    event.preventDefault();

    const blogToSendToAPI = {
      userId: wishListUserObject.id,
      gearId: userChoices.gearId,
      edit: userChoices.editNote,
    };
    if (
      userChoices.gearId &&
      userChoices.editNote
    )
    {
    fetch("http://localhost:8088/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogToSendToAPI),
    })
      .then((response) => response.json())
      .then(() => {
        navigate("/blog");
      });
    }
    else {
      alert("Please fill out the whole form.");
    }
  };


  return (
    <div className="centerThis">
      <Form className="GearFormEdit">
        <div className="newGearFlex">
          <h3 className="gearForm__title"></h3>
           {/* <img
            className="rock__img"
            src="https://media1.giphy.com/media/WpaVhEcp3Qo2TjwyI1/giphy.gif"
            alt="chandler saying no"
          />  */}
        </div>

        <fieldset className="smallestFieldSet">
          <div className="form-group">
            <Label htmlFor="name">Gear Name:</Label>
            <select
              required
              autoFocus
              className="form-control"
              value={gears.id}
              onChange={(event) => {
                const copy = { ...userChoices };
                copy.gearId = parseInt(event.target.value);
                update(copy);
              }}
            >
              <option value="0">All Gear</option>
              {gears.map((gearObj) => {
                return (
                  <option key={gearObj.id} value={gearObj.id}>
                    {gearObj.brand}: {gearObj.name}
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
    </div>
  );
};
