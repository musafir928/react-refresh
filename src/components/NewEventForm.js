import { useState } from "react"

export default function NewEventForm({setShowModal, setEvents}) {
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [location, setLocation] = useState("San Francisco")

    const resetForm = (e) => {
        setTitle("")
        setDate("")
        setLocation("San Francisco")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const event = {title, date, location, id: Math.floor(Math.random()*10000)}
        setEvents(p=>[...p, event])
        resetForm();
    }

  return (
      <form className="new-event-form row py-3" onSubmit={handleSubmit}>
          <label className="col-12">
              <span className="form-label">Event Title:</span>
              <input type="text" className="form-control" onChange={e=>setTitle(e.target.value)} value={title} required/>
          </label>
          <br />
          <label className="col-12 my-5">
              <span className="form-label">Event Date:</span>
              <input type="date" className="form-control" onChange={e=>setDate(e.target.value)} value={date} required/>
            </label>
            <br />
          <label className="col-12 my-5">
              <span className="form-label">Event Date:</span>
                <select className="form-control" onChange={(e)=>setLocation(e.target.value)}>
                    <option value="manchester">Manchester</option>
                    <option value="lopnur">Lopnur</option>
                    <option value="urumchi">Urumchi</option>
                </select>
            </label>
            <br />
            <div className="col-12 d-flex justify-content-around">
                <button className=" btn btn-success col-3">Submit</button>
                <button
                        className='btn btn-danger col-3'
                        onClick={() => setShowModal(false)}
                    >
                        close
                    </button>
                <button
                        className='btn btn-warning col-3'
                        onClick={resetForm}
                    >
                        reset form
                    </button>
            </div>
      </form>
  )
}
