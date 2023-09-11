import React, { useContext, useEffect} from 'react';
import { useState } from 'react';
import "../styles/Home.css";
import MusicSlider from '../components/MusicSlider';
import HomeRightSideBar from '../components/HomeRightSideBar';
import { MyContext } from '../context/MyContext';
// import MusicPlayer from '../components/MusicPlayer';

const Home = () => {
    const {allSongs , releaseData} = useContext(MyContext);
    const {songList , clickedOneSong, setSongList , setClickedOneSong,likedSong,setLikedSong} = useContext(MyContext);

    const handleSongImageClick = (clickedSongData) => {
        setSongList([...songList , clickedSongData]);
        setClickedOneSong(clickedSongData);
    };

    const happySongs = allSongs.map((data) => data).filter((category) => category.mood == "happy");
    const romanticSongs = allSongs.map((data) => data).filter((category) => category.mood == "romantic");
    const sadSongs = allSongs.map((data) => data).filter((category) => category.mood == "sad");
    const excitedSongs = allSongs.map((data) => data).filter((category) => category.mood == "excited");

    console.log(sadSongs);
    // console.log(clickedOneSong);
    
    return (
        <div className='home'>
            <div className='home-container'>
                <div className='home-music-datas'>
                    <MusicSlider title={"New Realease Songs"} musicData={releaseData} onSongImageClick={handleSongImageClick}/>
                    <MusicSlider title={"happy Songs"} musicData={happySongs}  onSongImageClick={handleSongImageClick}/>
                    <MusicSlider title={"romantic Songs"} musicData={romanticSongs} onSongImageClick={handleSongImageClick}/>
                    <MusicSlider title={"sad Songs"} musicData={sadSongs} onSongImageClick={handleSongImageClick}/>
                    <MusicSlider title={"excited Songs"} musicData={excitedSongs} onSongImageClick={handleSongImageClick}/>
                </div>
                <div className='rightSidebar-details'>
                    <HomeRightSideBar/>
                </div>
            </div>
        </div>

  )
}

export default Home;