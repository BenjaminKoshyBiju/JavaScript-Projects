
import './App.css';

function App2() {
  let name="Josh here"
  let clas="App-header"
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

export default App2;
