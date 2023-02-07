import { useState, useEffect } from 'react'


export const AccessoryGear = () => {
  const [gears, setGear] = useState([])


  useEffect(() => {
    fetch("http://localhost:8088/gears?typeId=4")
      .then((res) => res.json())
      .then((gearArray) => {
        setGear(gearArray)
      })
  }, []) 

  return (
    <div className="gear-container">
      {gears.map((gearObj) => {
        return (
          <div className="item-card" key={gearObj.id}>
            <img
              src={gearObj.imageUrl}
              alt={gearObj.name}
              className="gear-img"
            />
            <div className='card'>
                <div className="gear-name">{gearObj.name}</div>
                <div className="gear-name">${gearObj.price}</div>
                <div className="gear-name">{gearObj.brand}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}