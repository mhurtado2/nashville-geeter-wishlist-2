import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Gear } from "./Gear";

export const AllGear = ({ searchTermState }) => {
  const [gears, setGear] = useState([]); // returns an array: [stateVariable, setStatefunction] takes one argument: the initial value of the state variable
  //const [filteredGear, setFiltered] = useState([]);
  const navigate = useNavigate();
  //const [users, setUsers] = useState([])

  //const { gearId } = useParams();

  const localWishListUser = localStorage.getItem("wishlist_user");
  const wishListUserObject = JSON.parse(localWishListUser);

  useEffect(() => {
    const searchedGear = gears.filter((gear) => {
      return gear.name.toLowerCase().startsWith(searchTermState.toLowerCase());
    });
    setGear(searchedGear);
  }, [searchTermState]);

  useEffect(() => {
    fetch(`http://localhost:8088/gears`)
      .then((res) => res.json())
      .then((gearArray) => {
        setGear(gearArray);
      });
  }, []); // An empty dependency array will watch for the initial render of the component and only run the callback on that  initial run.

  //   useEffect(() => {
  //     fetch(`http://localhost:8088/users`)
  //       .then((res) => res.json())
  //       .then((userArray) => {
  //         setUsers(userArray);
  //       });
  //   }, []);

  const navigateToGearDetails = (gearId) => {
    navigate(`/${gearId}`);
  };

  const getAllGear = () => {
    fetch(`http://localhost:8088/gears`)
      .then((res) => res.json())
      .then((gearArray) => {
        setGear(gearArray);
      });
  };

  return (
    <div className="gear-container">
      {gears.map((gearObj) => {
        return (
          <div className="item-card" key={gearObj.id}>
            <img
              src={gearObj.imageUrl}
              alt={gearObj.name}
              className="gear-img"
              onClick={() => {
                navigateToGearDetails(gearObj.id);
              }}
            />
            <div className="gear-name">{gearObj.name}</div>
            <div>
              {wishListUserObject.admin ||
              wishListUserObject.id === gearObj.userId ? (
                <button
                  className="edit-btn"
                  onClick={() => navigate(`edit/${gearObj.id}`)}
                >
                  Edit
                </button>
              ) : (
                <></>
              )}

              {wishListUserObject.admin ||
              wishListUserObject.id === gearObj.userId ? (
                <button
                  onClick={() => {
                    fetch(`http://localhost:8088/gears/${gearObj.id}`, {
                      method: "DELETE",
                    }).then(() => {
                      getAllGear();
                    });
                  }}
                  className="gear_delete"
                >
                  X{" "}
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

{
  /* <div className="gear-container">
{gears.map((gearObj) => {
  return (
    <div className="item-card" key={gearObj.id}>
      <img
        src={gearObj.imageUrl}
        alt={gearObj.name}
        className="gear-img"
        onClick={() => {
          navigateToGearDetails(gearObj.id)
        }}
      />
      <div className="gear-name">{gearObj.name}</div>
      <div>
      <button onClick={() => navigate(`edit/${gearObj.id}`)}>Edit</button>
      {
      deleteButton()
      }
      </div>
    </div>
  )
})}
</div>  */
}

//if you go the Gear.js route
// {gears.map((gearObj) => {
//     <Gear
//       gearObject={gearObj}
//       getAllGear={getAllGear}
//       currentUser={wishListUserObject}
//       key={gearObj.id}
//     />;
//   })}
// </div>

// {
//   wishListUserObject.admin || wishListUserObject.id === gearObj.userId ? (
//     <button className="edit-btn" onClick={() => navigate(`edit/${gearObj.id}`)}>
//       Edit
//     </button>
//   ) : (
//     <></>
//   );
// }
