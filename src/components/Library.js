import { library ,useState} from "@fortawesome/fontawesome-svg-core";
import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({audioRef ,setCurrentSong, songs,setSongs ,isPlaying,setIsPlaying,libraryStatus}) => {
  return (
    <div className={`library ${libraryStatus?"active-library":""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            setSongs={setSongs}
            setCurrentSong={setCurrentSong}
            song={song}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
