import { useState } from "react"
import "./App.scss"
import Modal from "./components/Modal"
import NewEventForm from "./components/NewEventForm"
import NewEventsUseRef from "./components/NewEventsUseRef"
import Title from "./components/Title"

function App() {
    const [showTitle, setShowTitle] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [events, setEvents] = useState([])

    const handleDelete = (i) => setEvents((p) => p.filter((e) => e.id !== i))
    const toggleTitle = () => setShowTitle((p) => !p)
    return (
        <div className='App container'>
            <div className='button-container d-flex justify-content-around'>
                <button className='btn btn-primary mb-5' onClick={toggleTitle}>
                    {showTitle ? "hide title" : "show title"}
                </button>
            </div>
            {showTitle && (
                <>
                    <Title
                        title='Mario Kingdom Events'
                        subtitle='All the latest events in mario kingdom'
                    />
                    <Title />
                </>
            )}
            <ul className='list-group'>
                {events.map(({ title, id }, i) => (
                    <li
                        className='list-group-item d-flex justify-content-around'
                        key={i + 1}
                    >
                         {title}
                        <button
                            className='btn btn-danger'
                            onClick={() => handleDelete(id)}
                        >
                            delete event
                        </button>
                    </li>
                ))}
            </ul>
            <button className='btn btn-info mt-3' onClick={()=>setShowModal(true)}>
                Add Event
            </button>
            {/* {showModal && (
                <Modal >
                    <NewEventForm setShowModal={setShowModal} setEvents={setEvents}/>
                </Modal>
            )} */}
            {showModal && (
                <Modal >
                    <NewEventsUseRef setShowModal={setShowModal} setEvents={setEvents}/>
                </Modal>
            )}
        </div>
    )
}

export default App
