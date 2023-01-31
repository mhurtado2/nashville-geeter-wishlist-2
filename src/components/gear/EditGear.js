import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const GearEdit = () => {
  const [gear, updateGear] = useState({
    name: "",
    imageUrl: "",
    brand: "",
    description: "",
    artistUsingGear: "",
    demonstration: "",
    typeId: 0,
    price: "",
  });

  //const {types, updateType} = useState([])

  const { gearId } = useParams();
  //const { types } = useParams()
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8088/gears/${gearId}`)
      .then((response) => response.json())
      .then((data) => {
        updateGear(data);
      });
  }, [gearId]);

//   useEffect(() => {
//       fetch(`http://localhost:8088/types/${type.type}`)
//         .then((res) => res.json())
//         .then((typeData) => {
//           updateGear(typeData)
//         })

//     }, [types])

  const handleSaveButtonClick = (event) => {
    event.preventDefault();

    return fetch(`http://localhost:8088/gears/${gear.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gear),
    })
      .then((response) => response.json())

    //  fetch(`http://localhost:8088/types/${type.type}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(gear),
    // })
    //   .then((response) => response.json())
    
      .then(() => {
        navigate("/");
      });
  };

  return (
    <form className="GearForm">
      <h3 className="gearForm__title">Edit Gear</h3>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <textarea
            required
            autoFocus
            type="text"
            className="form-control"
            value={gear.name}
            onChange={(event) => {
              const copy = { ...gear };
              copy.name = event.target.value;
              updateGear(copy);
            }}
          >
            {" "}
            {gear.name}{" "}
          </textarea>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="imageUrl">Image:</label>
          <textarea
            required
            autoFocus
            type="text"
            className="form-control"
            value={gear.imageUrl}
            onChange={(event) => {
              const copy = { ...gear };
              copy.imageUrl = event.target.value;
              updateGear(copy);
            }}
          >
            {" "}
            {gear.imageUrl}
          </textarea>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="brand">Brand:</label>
          <textarea
            required
            autoFocus
            type="text"
            className="form-control"
            value={gear.brand}
            onChange={(event) => {
              const copy = { ...gear };
              copy.brand = event.target.value;
              updateGear(copy);
            }}
          >
            {gear.brand}
          </textarea>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            required
            autoFocus
            type="text"
            className="form-control"
            value={gear.description}
            onChange={(event) => {
              const copy = { ...gear };
              copy.description = event.target.value;
              updateGear(copy);
            }}
          >
            {gear.description}
          </textarea>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="artistUsing">Artist That Uses This Gear :</label>
          <textarea
            required
            autoFocus
            type="text"
            className="form-control"
            value={gear.artistUsingGear}
            onChange={(event) => {
              const copy = { ...gear };
              copy.artistUsingGear = event.target.value;
              updateGear(copy);
            }}
          >
            {gear.artistUsingGear}
          </textarea>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="demonstration">Demonstration:</label>
          <textarea
            required
            autoFocus
            type="text"
            className="form-control"
            value={gear.demonstration}
            onChange={(event) => {
              const copy = { ...gear };
              copy.demonstration = event.target.value;
              updateGear(copy);
            }}
          >
            {gear.demonstration}
          </textarea>
        </div>
      </fieldset>

      <fieldset>
<div className="form-group">
  <div>Type: </div>

    <label>
      <textarea
        type="number"
        value={gear.typeId}
        onChange={(event) => {
          const copy = { ...gear };
          copy.typeId = event.target.value;
          updateGear(copy);
        }}
      >
        {gear.typeId}
      </textarea>
      <div>guitar = 1, pedal = 2, amp = 3  </div>
    </label> 
</div>
</fieldset>

      
      <fieldset>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <textarea
            required
            autoFocus
            type="number"
            className="form-control"
            value={gear.price}
            onChange={(event) => {
              const copy = { ...gear };
              copy.price = event.target.value;
              updateGear(copy);
            }}
          >
            {gear.price}
          </textarea>
        </div>
      </fieldset>
      <button
        onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
        className="btn btn-primary"
      >
        Save Edits
      </button>
    </form>
  );
};


//  <fieldset>
// <div className="form-group">
//   <div>Type: </div>

//     <label>
//       <textarea
//         type="number"
//         value={gear.typeId}
//         onChange={(event) => {
//           const copy = { ...gear };
//           copy.typeId = event.target.value;
//           updateGear(copy);
//         }}
//       >
//         {gear.typeId}
//       </textarea>
//       <div>guitar = 1, pedal = 2, amp = 3  </div>
//     </label> 
// </div>
// </fieldset>



// <fieldset>
// <div className="form-group">
//   <div>Type: </div>
//   {types.map((typeObj) => {
//     return (
//       <div key={typeObj.id} className="radio">
//         <label>
//           <input
//             type="radio"
//             value={typeObj.id}
//             checked={gear.typeId === typeObj.id}
//             onChange={(event) => {
//               const copy = { ...gear }
//               copy.typeId = parseInt(event.target.value)
//               updateGear(copy)
//             }}
//           />
//           {typeObj.type}
//         </label>
//       </div>
//     )
//   })}
// </div>
// </fieldset>