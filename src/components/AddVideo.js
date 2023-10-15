import './AddVideo.css';
import {useEffect, useState} from 'react';

const initialState = {
    time: '1 month ago',
    channel: 'Coder Dost',
    verified: true,
    title:'',
    views:''
  }

function AddVideo({addVideos , editableVedio, updateVedio}) {
  const [video, setVideo] = useState(initialState);

  function handleSubmit(e) {
    e.preventDefault();
    if(editableVedio){
      updateVedio(video)
    }
    else{

      addVideos(video)
    }
    setVideo(initialState)

  }
  function handleChange(e) {
    setVideo({...video,
        [e.target.name] : e.target.value
    })
  }
  useEffect(()=>{
    if(editableVedio){
      setVideo(editableVedio)
    }
  },[editableVedio])

  return (
    <form>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="title"
        value={video.title}
      />
      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="views"
        value={video.views}
      />
      <button
        onClick={handleSubmit}
      >
        {editableVedio ? 'Edit' :'Add'}  Video
      </button>
    </form>
  );
}

export default AddVideo;
