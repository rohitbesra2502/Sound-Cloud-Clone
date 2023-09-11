import React, { useContext, useState } from 'react'
import "../styles/Library.css";
import { MyContext } from '../context/MyContext';

const Library = () => {
  const {allSongs ,setSongList,setClickedOneSong, likedSong , setLikedData ,songList } = useContext(MyContext);
  const [activeSection , setActiveSection] = useState('overview');

  const handleSectionClick = (section) => {
    setActiveSection(section)
  }
  const handleLikesSong = (song) => {
    setSongList([...songList , song]);
    setClickedOneSong(song);
    console.log(setSongList);
    console.log(setClickedOneSong);
  }
  return (
    <div className='library_wrapper'>
      <div className='container library_inner_container'>
        <div className='library_maintitles'>
          <div onClick={() => handleSectionClick('overview')}>Overview</div>
          <div onClick={() => handleSectionClick('likes')}>Likes</div>
          <div onClick={() => handleSectionClick('playlists')}>Playlists</div>
          <div onClick={() => handleSectionClick('albums')}>Albums</div>
          <div onClick={() => handleSectionClick('stations')}>Stations</div>
          <div onClick={() => handleSectionClick('following')}>Following</div>
          <div onClick={() => handleSectionClick('history')}>History</div>
        </div>
        <hr className='hr'/>
         {/* Render different sections based on activeSection */}
        <div className='liked_wrapper'>
          {/* {Overview Sections} */}
          {activeSection === 'overview' && <h6>work In progress....</h6>}
          {/* {Likes Sections} */}
          {activeSection === 'likes' && likedSong.map((song)=> (
            <div className='liked_wrapper_inner' onClick={() => handleLikesSong(song)}>
              <img src={song.thumbnail} className='liked_wrapper_img'/>
              <div className='liked_wrapper_title'>
                {song.title}
              </div>
            </div>
          ))}
          {/* {Playlists Sections} */}
          {activeSection === 'playlists' && <h6>work In progress....</h6>}
          {/* {Albums Sections} */}
          {activeSection === 'albums' && <h6>work In progress....</h6>}
          {/* {Stations Sections} */}
          {activeSection === 'stations' && <h6>work In progress....</h6>}
          {/* {Following Sections} */}
          {activeSection === 'following' && <h6>work In progress....</h6>}
          {/* {History Sections} */}
          {activeSection === 'history' && <h6>work In progress....</h6>}
        </div>
      </div>
    </div>
  )
}

export default Library