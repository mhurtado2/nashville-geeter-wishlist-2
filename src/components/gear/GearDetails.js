import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const GearDetails = () => {
  const [gear, setGear] = useState({})
  const { gearId } = useParams()


  useEffect(() => {
    fetch(
      `http://localhost:8088/gears/${gearId}?_expand=type`
    )
      .then((res) => res.json())
      .then((gearData) => {
        setGear(gearData)
      })
  }, [])


  return (
    <div className="gear-detail-container">
    <h3 className="gear-detail-name">{gear?.name}</h3>
    <img src={gear?.imageUrl} alt={gear?.name} className="gear-img" />
    <div className='details-div'>
    <div>
    <div className="gear-details">{gear?.description}</div>
    <div className="gear-details">Currently Used By: {gear?.artistUsingGear}</div>
    <div className="gear-details">Price: {gear?.price}</div>
    </div>
    <iframe className="youtubeVideo" width="560" height="315" src={gear?.demonstration} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

    </div>
      )
  
}


{/* <div className="gear-detail-container">
<h3 className="gear-detail-name">Details: {gear?.name}</h3>
<img src={gear?.imageUrl} alt={gear?.name} className="gear-img" />
<div className="gear-details">Description: {gear?.description}</div>
<div className="gear-details">Type: {gear?.type?.name}</div>
<div className="gear-details">Current Used By: {gear?.artistUsingGear}</div>
<div className="gear-details">Price: {gear?.price}</div>
</div> */}