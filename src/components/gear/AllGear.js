
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
 import React from 'react';

export const AllGear = ({ searchTermState }) => {
  const [gears, setGear] = useState([]); // returns an array: [stateVariable, setStatefunction] takes one argument: the initial value of the state variable
  const [filteredGear, setFiltered] = useState([]);
  const navigate = useNavigate();
 

  const localWishListUser = localStorage.getItem("wishlist_user");
  const wishListUserObject = JSON.parse(localWishListUser);

  useEffect(() => {
    fetch(`http://localhost:8088/gears`)
      .then((res) => res.json())
      .then((gearArray) => {
        setGear(gearArray);
      });
  }, []);// An empty dependency array will watch for the initial render of the component and only run the callback on that  initial run.
  
  useEffect(() => {
    if (wishListUserObject.admin) {
      //for employees
      setFiltered(gears);
    } else {
      // for customers
      setFiltered(gears);
    }
  }, [gears]);
  
  useEffect(() => {
    const searchedGear = gears.filter((gear) => {
      return gear.name.toLowerCase().startsWith(searchTermState.toLowerCase());
    });
    setFiltered(searchedGear);
  }, [searchTermState]);



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
      {filteredGear.map((gearObj) => {
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
            <div className="cardLine"></div>
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

