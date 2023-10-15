import { useState } from 'react';
import './App.css';
import AddVideo from './components/AddVideo';
import videoDB from './data/data';
import VideoList from './components/VideoList';
function App() {

  const [videos,setVideos] = useState(videoDB);
  const [editableVedio , setEditableVideo] = useState(null)
  function addVideos(video){
      setVideos([
            ...videos,
            {...video, id: videos.length+1}
          ]);
  }

  function deleteVedio(id){
    setVideos(videos.filter((vedio)=>vedio.id!==id))
    console.log(`deleted vedio ${id}`)
}

function editVedio(id){
  setEditableVideo(videos.find((vedio)=>vedio.id===id))
}

function updateVedio(vedio){
  const index = videos.findIndex((v)=>v.id === vedio.id)
  const newVedios = [...videos]
  newVedios.splice(index,1,vedio)
  setVideos(newVedios)
}

  return (
    <div className="App" onClick={()=>console.log('App')}>
       <AddVideo addVideos={addVideos} updateVedio={updateVedio} editableVedio={editableVedio}></AddVideo>
       <VideoList videos={videos} deleteVedio={deleteVedio} editVedio={editVedio}></VideoList>


    </div>
  );
}

export default App;
