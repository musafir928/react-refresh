import { useRef } from "react"

export default function NewEventsUseRef({setShowModal, setEvents}) {

    const title = useRef()
    const date = useRef()

    const resetForm = (e) => {
        title.current.value = ""
        date.current.value = ""
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const event = {title: title.current.value, date: date.current.value, id: Math.floor(Math.random()*10000)}
        setEvents(p=>[...p, event])
        resetForm();
    }

  return (
      <form className="new-event-form row py-3" onSubmit={handleSubmit}>
          <label className="col-12">
              <span className="form-label">Event Title:</span>
              <input 
                type="text" 
                ref={title}
                className="form-control" 
                required
              />
          </label>
          <br />
          <label className="col-12 my-5">
              <span className="form-label">Event Date:</span>
              <input 
                type="date" 
                ref={date}
                className="form-control" 
                required
               />
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
