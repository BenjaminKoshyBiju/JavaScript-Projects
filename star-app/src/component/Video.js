import './Videos.css'
function Video({body,title,col}){
    //let cls='blue'
return (
<div style={{backgroundColor:col}}> 
<img src="https://loremflickr.com/160/90" alt="cat" />
{body} {title} </div>
);
}
export default Video;