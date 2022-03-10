import './App.scss';

function App() {
  let name = "mario"

  const handleClick = () => {
    name = 'luigi'
  }
  return (
   <div className="App">
      <h1>Hi my name is {name}</h1>
      <button onClick={handleClick}>Change name</button>
	</div>
  );
}

export default App;
