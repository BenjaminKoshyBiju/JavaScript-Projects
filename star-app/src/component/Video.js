import "./Videos.css";
function Video({ title, channel, views }) {
  return (
    <div className="container">
      <div className="title">{ title }</div>
      <div className="channel">{ channel }</div>
      <div className="views">{views }</div>

      <img src="https://loremflickr.com/160/90" alt="cat" />
    </div>
  );
}
export default Video;
