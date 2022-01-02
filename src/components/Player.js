import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faAngleLeft,
  faAngleRight,
  faPauseCircle,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  songs,
  setSongs,
}) => {

  //Event Handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };
  const skipTrackHandler = async(direction) => {
    let currentIndex=songs.findIndex((song)=>song.id===currentSong.id);
    let id;
    if(direction==='skip-forward'){
      id=(songs[(currentIndex+1)%(songs.length)]).id;
      await setCurrentSong(songs[(currentIndex+1)%(songs.length)]);
    }
    if(direction==='skip-back'){
      if(currentIndex===0){
        id=(songs[songs.length-1]).id;
        await setCurrentSong(songs[songs.length-1]);
      }
      else{
        id=(songs[currentIndex-1]).id;
        await setCurrentSong(songs[(currentIndex-1)]);
      }      
    }
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
    
    
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          onChange={dragHandler}
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          type="range"
        />
        <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-back")}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPauseCircle : faPlayCircle}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-forward")}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};

export default Player;
