
import './App.css';

function App() {
  let name="Benjamin here"
  let clas="App-header"
  console.log('working')
  return (
    
    <div className="App">
      
      Hii there
      
      <div className={clas}>
      {name}
      <Child></Child>
      </div>
     
    </div>
  );
}
function Child() {
  return (
    <div className="App">
      this is child
      <div className='App-header'>
      Benjamin jr here!
      </div>
     
    </div>
  );
}

export default App;
