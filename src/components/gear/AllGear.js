import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const AllGear = () => {
  const [gears, setGear] = useState([]) // returns an array: [stateVariable, setStatefunction] takes one argument: the initial value of the state variable
  const navigate = useNavigate()

  useEffect(() => {
    console.log('I only run once')
    fetch(`http://localhost:8088/gears`)
      .then((res) => res.json())
      .then((gearArray) => {
        setGear(gearArray)
      })
  }, []) // An empty dependency array will watch for the initial render of the component and only run the callback on that  initial run.

  const navigateToGearDetails = (gearId) => {
    navigate(`/${gearId}`)
  }

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
                navigateToGearDetails(gearObj.id)
              }}
            />
            <div className="gear-name">{gearObj.name}</div>
          </div>
        )
      })}
    </div>
  )
}