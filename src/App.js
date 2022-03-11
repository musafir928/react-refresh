import { useState } from 'react';
import './App.scss';
import Title from './components/Title';

function App() {
  const [showTitle, setShowTitle] = useState(true)
  const [events, setEvents] = useState([
	  {title: "football",id:1},
	  {title: "baseball",id:2},
	  {title: "basketball",id:3}
  ])

  const addEvent = () => setEvents(p=> [ ...p,{id: p.length+1,title: "new event"}])
  const handleDelete = (i) => setEvents(p=>p.filter(e=>e.id!==i))
  const toggleTitle = () => setShowTitle(p=> !p)
  return (
   <div className="App container">
	   <button className="btn btn-primary mb-5" onClick={toggleTitle}>{showTitle ? "hide title" : "show title"}</button>
	   {
		   showTitle && <>    
					<Title
					title="Mario Kingdom Events"
					subtitle="All the latest events in mario kingdom" 
					/>
					<Title />
				</>
	   }
	  <ul className='list-group'>
		  {events.map(({title, id},i)=>(
				<li className='list-group-item d-flex justify-content-around' key={i+1}>
					{i+1}. {title}
					<button className="btn btn-danger" onClick={()=>handleDelete(id)}>delete event</button>
				</li>
		  ))}
	  </ul>
	  <button className="btn btn-info mt-3" onClick={addEvent}>Add Event</button>
	</div>
  );
}

export default App;
