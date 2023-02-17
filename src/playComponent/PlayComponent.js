import React ,{useState , createRef,useRef} from 'react';
import '../playComponent/play.css';
import introVideo from '../public/video/Pexels Videos 4409.mp4';
import {DefaultPlayer as Video} from 'react-html5video';

function PlayComponent(props) {
  const [model, setModel] = useState(false);
  const src = props.data.media_path;
  const poster = props.data.thumbnail;
  {
    let divRef = useRef(null);
    const openModel = ()=>{
        divRef.current.classList.remove('video');
        divRef.current.classList.add('model');
        setModel(true);
    }
    const closeModel = ()=>{
        divRef.current.classList.add('video');
        divRef.current.classList.remove('model');
        setModel(false);
    }
  } 
  return (
    <div className='gallery' >
      <div className='video' >
        {
          
        }
        {model && <button className='model-close-btn' onClick={()=>this.closeModel()}>X</button>}
        <div className='video-container'>

            <Video
              style={{width:'100%'}}
              autoPlay={model}
              controls={['PlayPause','Seek','Time','Volume','Fullscreen']}
              poster={poster}
            >
              <source src={src} type='video/webm'/>
            </Video>

        </div>
      </div>
      
    </div>
  )
}

export default PlayComponent