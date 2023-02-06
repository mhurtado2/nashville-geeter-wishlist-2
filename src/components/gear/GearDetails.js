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
        <h3 className="gear-detail-name">{gear?.brand}: {gear?.name}</h3>
        {/* <div className='flexThis'> */}
          <div className='columnThisStuff'>
              <div>
              <iframe className="youtubeVideo" width="560" height="315" src={gear?.demonstration} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              {/* <img src={gear?.imageUrl} alt={gear?.name} className="gear-img-2" /> */}
              </div>
        {/* </div> */}
          </div>
    

          <div className='details-div'>
            {/* <div className="video-div">
            <iframe className="youtubeVideo" width="560" height="315" src={gear?.demonstration} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div> */}
            <div className="detail-div">
                    <div className="gear-details">{gear?.description}</div>
                    <div className="gear-details">Currently Used By: {gear?.artistUsingGear}</div>
                    <div className="gear-details">Price: ${gear?.price}</div>
            </div>
          </div>
    </div>
      )
  
}


