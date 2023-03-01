import Video from "./component/Video";
function App() {
  let cls='blue'
  let name='Benjamin'
  return (
    <div className={cls}>
      {name}
      <Video body="React" title="learning" col="blue"></Video>
      <Video body="Node" title="learned" col="green"></Video>
      <Video body="Aws" title="to be learned" col="red"></Video>
    </div>
  );
}
export default App;
