import { useState } from 'react';
import './App.scss';

function App() {
  const [name, setName] = useState("mario")
  const [showTitle, setShowTitle] = useState(true)
  const [events, setEvents] = useState([
	  {title: "football",id:1},
	  {title: "baseball",id:2},
	  {title: "basketball",id:3}
  ])

  const handleClick = () => setName("luigi")
  const addEvent = () => setEvents(p=> [ ...p,{id: p.length+1,title: "new event"}])
  const handleDelete = (i) => setEvents(p=>p.filter(e=>e.id!==i))
  const toggleTitle = () => setShowTitle(p=> !p)
  return (
   <div className="App container">
	   <button className="btn btn-primary mb-5" onClick={toggleTitle}>{showTitle ? "hide title" : "show title"}</button>
	   {
		   showTitle && <>    
					<h1>Hi my name is {name}</h1>
					<button className="btn btn-warning mb-3" onClick={handleClick}>Change name</button>
				</>
	   }
	  <ul className='list-group'>
		  {events.map(({title, id},i)=>(
			  <>
				<li className='list-group-item d-flex justify-content-around' key={i+1}>
					{i+1}. {title}
					<button className="btn btn-danger" onClick={()=>handleDelete(id)}>delete event</button>
				</li>
				
			  </>
		  ))}
	  </ul>
	  <button className="btn btn-info mt-3" onClick={addEvent}>Add Event</button>
	</div>
  );
}

export default App;
