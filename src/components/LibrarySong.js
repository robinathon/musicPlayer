import React,{useState} from "react";

const LibrarySong = ({songs, setCurrentSong, song,setSongs ,id,audioRef,isPlaying,setIsPlaying}) => {
  const songSelectHandler=async()=>{
    const selectedSong=songs.filter((state)=>state.id===id);
    await setCurrentSong(selectedSong[0]);
    //Add Active State
    const newSongs=songs.map((song)=>{
      if(song.id===id){
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
    //check if the song is playing
    if(isPlaying) audioRef.current.play();
  }

  return (
    <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ""}`}>
      
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
