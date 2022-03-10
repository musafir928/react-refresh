import { useState } from 'react';
import './App.scss';

function App() {
  const [name, setName] = useState("mario")
  const [events, setEvents] = useState([
	  {title: "football",id:1},
	  {title: "baseball",id:2},
	  {title: "basketball",id:3}
  ])

  const handleClick = () => setName("luigi")
  const addEvent = () => setEvents(p=> [ ...p,{id: p.length+1,title: "new event"}])
  const handleDelete = (i) => setEvents(p=>p.filter(e=>e.id!==i))
  return (
   <div className="App">
      <h1>Hi my name is {name}</h1>
      <button onClick={handleClick}>Change name</button>
	  <ul>
		  {events.map(({title, id},i)=>(
			  <>
				<li key={i+1}>{i+1}. {title}</li>
				<button onClick={()=>handleDelete(id)}>delete event</button>
			  </>
		  ))}
	  </ul>
	  <button onClick={addEvent}>Add Event</button>
	</div>
  );
}

export default App;
