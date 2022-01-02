import React, { useState, useRef } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.scss";
import data from "./data";
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {
  const audioRef = useRef(null);
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration });
  };
  const songEndHandler=async()=>{
    let currentIndex=songs.findIndex((song)=>song.id===currentSong.id);
    const id=(songs[(currentIndex+1)%(songs.length)]).id;
    await setCurrentSong(songs[(currentIndex+1)%(songs.length)]);
    if(isPlaying) audioRef.current.play();
    const newSongs=songs.map((song)=>{
      if(song.id===id){
        console.log(currentSong.active);
        console.log(currentSong);
        return{
          ...song,
          active:true,
        };
      }
      else{
        return{
          ...song,
          active:false,
        };
      }
    });
    setSongs(newSongs);
  }
  
  //state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [libraryStatus,setLibraryStatus]=useState(false);

  return (
    <div className={`App ${libraryStatus ?"library-active" :""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setSongs={setSongs}
      />
      <Library
        audioRef={audioRef}
        setCurrentSong={setCurrentSong}
        songs={songs}
        setSongs={setSongs}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        libraryStatus={libraryStatus}
      />
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
}

export default App;
