import { useState } from 'react';
import './App.scss';

function App() {
  let [name, setName] = useState("mario")

  const handleClick = () => setName("luigi")
  return (
   <div className="App">
      <h1>Hi my name is {name}</h1>
      <button onClick={handleClick}>Change name</button>
	</div>
  );
}

export default App;
