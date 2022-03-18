import { useState, useEffect } from "react"

export default function TripList() {
  const [trips, setTrips] = useState([])
  
  useEffect(()=>{
    fetch('http://localhost:3000/trips')
    .then(response=>response.json())
    .then(json=>console.log(json))
  },[])

  console.log(trips)

  return (
    <div className="container bg-secondary">
      <ul className="list">
      {
        trips.map(trip=> (
          <li kry="trip.title" className="list-item d-flex justify-content-between my-5">
            <p className="text-primary">{trip.title}</p>
            <p className="text-warning">{trip.price}</p>
          </li>
        ))
      }
      </ul>
    </div>
  )
}
