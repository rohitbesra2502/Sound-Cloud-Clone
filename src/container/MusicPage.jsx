import React, { useContext } from 'react'
import "../styles/MusicPage.css";
import { MyContext } from '../context/MyContext';

const MusicPage = () => {
  const {allSongs,input,clickedSongData,songList,setSongList,setClickedOneSong} = useContext(MyContext);
  const searchVal = input.toLowerCase();
  const filteredData = allSongs.filter((song) => song.title.toLowerCase().includes(searchVal));
  console.log("filteredData",filteredData);

  const handleMusicPageSong = (song) => {
    setSongList([...songList , song]);
    setClickedOneSong(song);
  }
  return(
    <div className=' musicpage-wrapper'>
      <div className='container music-page-hero'>
        <div className='music-page-main'>
          {filteredData && filteredData.map((song)=> (
            <div className='music_page_inner' key={song.id} onClick={() => handleMusicPageSong(song)}>
              <img src={song.thumbnail} className='music_page_img'/>
              <div className='music_page_title'>
                {song.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MusicPage;