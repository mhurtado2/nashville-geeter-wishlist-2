import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Label, Input, FormGroup } from "reactstrap"


export const NewGearForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [gear, update] = useState({
        name: "",
        imageUrl: "",
        brand: "",
        description: "",
        artistUsingGear: "",
        demonstration: "",
        typeId: 0,
        price: ""
    })

    const [types, setType] = useState([])
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */
   const navigate = useNavigate()


   useEffect(() => {
    fetch('http://localhost:8088/types')
      .then((res) => res.json())
      .then((gearData) => {
        setType(gearData)
      })

  }, [])

    const localWishListUser = localStorage.getItem("wishlist_user")
    const wishListUserObject = JSON.parse(localWishListUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        // TODO: Create the object to be saved to the API
        // {
        //     "userId": 3,
        //     "description": "Saepe ex sapiente deserunt et voluptas fugiat vero quasi. Ipsam est non ipsa. Occaecati rerum ipsa consequuntur. Ratione commodi unde sint non rerum. Sit quia et aut sunt.",
        //     "emergency": false,
        //     "dateCompleted": "Fri Apr 29 2022 14:02:20 GMT-0500 (Central Daylight Time)"
        //   }
        const gearToSendToAPI = {
            userId: wishListUserObject.id,
            name: gear.name,
            imageUrl: gear.imageUrl,
            brand: gear.brand,
            description: gear.description,
            artistUsingGear: gear.artistUsingGear,
            demonstration: gear.demonstration,
            typeId: gear.typeId,
            price: gear.price
        }
        // TODO: Perform the fetch() to POST the object to the API
        return fetch('http://localhost:8088/gears', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(gearToSendToAPI)
        })
        .then(response => response.json())
        .then(() => {
             navigate("/")
        })
    }

    return (
        <Form className="GearForm">
            <div className="newGearFlex">
            <h3 className="gearForm__title"></h3>
            <img
          className="rock__img"
          src="https://media0.giphy.com/media/dXinZcsNo3M68UnYWo/giphy.gif?cid=6c09b952nh1cco7pnsbmw4ntfl0kg7e7vnn84fiyoihybxay&rid=giphy.gif&ct=s"
          alt="Rock and Roll Logo"
        />
            </div>
            <fieldset className="smallerFieldSet">
       
                <div className="form-group">
                    <Label htmlFor="name">Name:</Label>
                    <Input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Name Of Gear"
                        value={gear.name}
                        onChange={
                            (event) => {
                                const copy = {...gear}
                                copy.name = event.target.value
                                update(copy)
                            }
                        } />
                </div>

            </fieldset>
            <fieldset className="smallerFieldSet">
                <div className="form-group">
                    <Label htmlFor="imageUrl">Image:</Label>
                    <Input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Image Of Gear"
                        value={gear.imageUrl}
                        onChange={
                            (event) => {
                                const copy = {...gear}
                                copy.imageUrl = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset className="smallerFieldSet">
                <div className="form-group">
                    <Label htmlFor="brand">Brand:</Label>
                    <Input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brand Name"
                        value={gear.brand}
                        onChange={
                            (event) => {
                                const copy = {...gear}
                                copy.brand = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset className="smallerFieldSet">
                <div className="form-group">
                    <Label htmlFor="description">Description:</Label>
                    <Input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of Gear"
                        value={gear.description}
                        onChange={
                            (event) => {
                                const copy = {...gear}
                                copy.description = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset className="smallerFieldSet">
                <div className="form-group">
                    <Label htmlFor="artistUsing">Artist That Uses This Gear :</Label>
                    <Input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="The Artist Or Artists That Use This Gear"
                        value={gear.artistUsingGear}
                        onChange={
                            (event) => {
                                const copy = {...gear}
                                copy.artistUsingGear = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset className="smallerFieldSet">
                <div className="form-group">
                    <Label htmlFor="demonstration">Demonstration:</Label>
                    <Input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Demonstration Video"
                        value={gear.demonstration}
                        onChange={
                            (event) => {
                                const copy = {...gear}
                                copy.demonstration = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset className="smallerFieldSet">
        <div className="form-group">
          <div className="typeLabel">Type: </div>
          {types.map((typeObj) => {
            return (
              <div key={typeObj.id} className="radio">
                <Label>
                  <Input 
                    type="radio"
                    value={typeObj.id}
                    checked={gear.typeId === typeObj.id}
                    onChange={(event) => {
                      const copy = { ...gear }
                      copy.typeId = parseInt(event.target.value)
                      update(copy)
                    }}
                  />
                <div className="flexyBoi">
                  {typeObj.type}
                </div>
    
                </Label>
              </div>
            )
          })}
        </div>
      </fieldset>
            <fieldset className="smallerFieldSet">
                <div className="form-group">
                    <Label htmlFor="price">Price:</Label>
                    <Input
                        required autoFocus
                        type="number"
                        className="form-control"
                        placeholder="Price Of Gear"
                        value={gear.price}
                        onChange={
                            (event) => {
                                const copy = {...gear}
                                copy.price = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
  
            <button 
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Submit New Gear
            </button>
        </Form>
    )
}