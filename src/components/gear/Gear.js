// import { Link, useNavigate } from "react-router-dom";

// export const Gear = ({
//   gearObject,
//   currentUser,
//   getAllGear,
// }) => {
//   //Find the assigned employee for the current ticket
// const navigate = useNavigate()

//   const deleteButton = () => {
//      if (currentUser.admin) {
//         return <button onClick={() => {
//             fetch(`http://localhost:8088/gears/${gearObject.id}`, {
//                 method: "DELETE"
//             })
//             .then(() => {
//                 getAllGear()
//             })
//         }}
//         className="ticket_delete">Delete </button>
//     } 
//     else {
//         return ""
//     }
 
//   }

//   const navigateToGearDetails = (gearObjectId) => {
//     navigate(`/${gearObjectId}`);
//   };



//   return (
//     <div className="gear-container">
//         <div className="item-card" key={gearObject.id}>
//           <img
//             src={gearObject.imageUrl}
//             alt={gearObject.name}
//             className="gear-img"
//             onClick={() => {
//               navigateToGearDetails(gearObject.id)
//             }}
//           />
//           <div className="gear-name">{gearObject.name}</div>
//           <button onClick={() => navigate(`edit/${gearObject.id}`)}>Edit</button> 
//           {
//           deleteButton()
//           }
//         </div>
//         </div>

//   );
// };
