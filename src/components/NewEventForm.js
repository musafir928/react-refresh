import { useState } from "react"

export default function NewEventForm({setShowModal, setEvents}) {
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")

    const resetForm = (e) => {
        setTitle("")
        setDate("")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const event = {title, date, id: Math.floor(Math.random()*10000)}
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
