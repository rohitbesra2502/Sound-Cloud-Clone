import React , {useContext, useEffect, useState} from 'react'
import "../styles/MusicPlayer.css";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LoopIcon from '@mui/icons-material/Loop';
import PauseIcon from '@mui/icons-material/Pause';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import image from "../img/slide1.jpg";
import { MyContext } from '../context/MyContext';
import { useRef } from 'react';
import MusicHistory from './MusicHistory';

const MusicPlayer = () => {
    const {songList,likedSong,setLikedSong,clickedOneSong} = useContext(MyContext);
    const [soundPlayed , setSoundPlayed] = useState(null);
    const [isPlaying , setIsPlaying] = useState(false);
    const [filled , setFilled] = useState(0);
    const [isRunning ,  setIsRunning] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [currentIndex , setCurrentIndex] = useState(1);
    const [showPlaylist, setShowPlaylist] = useState(false);
    const [isLooping, setIsLooping] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isFav , setIsFav] = useState(false);

    // console.log(clickedOneSong);
    // console.log(songList);
    
    const audioRef = useRef(null);
    useEffect(() => {
        setCurrentIndex(songList.length-1);
    },[songList]);
    const audio_name = songList[currentIndex]?.audio_url;

    useEffect(()=>{
        if(filled < 100 && isRunning){
            setTimeout(()=>setFilled(prev=>prev+=2),50)
        }
    },[filled,isRunning]);

    useEffect(() => {
        const audio = audioRef.current;

        const handleTimeUpdate = () => {
            setCurrentTime(audio.currentTime);
            setDuration(audio.duration);
        };

        audio.addEventListener('timeupdate', handleTimeUpdate);

        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, []);
    
    
    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const toggleMute = () => {
        setIsMuted(prev => !prev); // Toggle the isMuted state
        soundPlayed.mute(!isMuted); // Mute/unmute the sound
    }
    const playNextSong = () => {
        setFilled(0);
        if(currentIndex > songList.length - 1){
            setCurrentIndex(0);
            return;
        }
        setCurrentIndex(currentIndex + 1);
        setIsFav(false);
    };
    const playPrevSong = () => {
        setFilled(0);
        if(currentIndex == 0){
            setCurrentIndex(0);
            return;
        }
        setCurrentIndex(currentIndex - 1);
        setIsFav(false);
    };

    useEffect(() => {
        const audio = audioRef.current;
    
        const handlePlay = () => {
          setIsPlaying(true);
          setIsRunning(true);
        };
    
        const handlePause = () => {
          setIsPlaying(false);
          setIsRunning(false);
        };
    
        const handleEnded = () => {
            // setIsPlaying(false);
            // if (isLooping) {
                // audio.currentTime = 0; // Reset the audio to the beginning
                // audio.play(); // Replay the audio
            // }
            setIsPlaying(false);
            setIsRunning(false);
            setFilled(0);
            if (isLooping) {
                audioRef.current.currentTime = 0;
                audioRef.current.play();
            }
        };
        audio.addEventListener('play', handlePlay);
        audio.addEventListener('pause', handlePause);
        audio.addEventListener('ended', handleEnded);
    
        return () => {
          audio.removeEventListener('play', handlePlay);
          audio.removeEventListener('pause', handlePause);
          audio.removeEventListener('ended', handleEnded);
        };
    }, [isLooping]);
    const togglePlayPause = () => {
        const audio = audioRef.current;
        if (isPlaying) {
          audio.pause();
        } else {
          audio.play();
        }
    };
    const togglePlaylist = () => {
        setShowPlaylist(!showPlaylist);
    };
    const toggleLoop = () => {
        setIsLooping(prev => !prev);
    };
    useEffect(() => {
        const audio = audioRef.current;
      
        const handleTimeUpdate = () => {
          setCurrentTime(audio.currentTime);
          setDuration(audio.duration);
        };
      
        audio.addEventListener('timeupdate', handleTimeUpdate);
      
        return () => {
          audio.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, []);
    useEffect(() => {
        if (isPlaying && isRunning) {
          const progressPercentage = (currentTime / duration) * 100;
          setFilled(progressPercentage);
        }
    }, [isPlaying, isRunning, currentTime, duration]);


    // handling fav icon
    const handleFavSong = () => {
        const isAlreadyLiked = likedSong.some(song => song._id === clickedOneSong._id);
        if (!isAlreadyLiked) {
          setLikedSong([clickedOneSong, ...likedSong]);
        } else {
            const updatedLikedSongs = likedSong.filter((song) => song._id !== clickedOneSong._id);
            setLikedSong(updatedLikedSongs);
        }
      }
    // console.log(likedData);
    return(
        <div className=' musicplayer-wrapper'>
            <div className='main-music-player'>
                <div className='music-player-controls'>
                    <audio ref={audioRef} src={audio_name} autoPlay/>
                    <div><SkipPreviousIcon onClick={playPrevSong}/></div>
                    <div>
                        {/* {isPaused ? <PlayArrowIcon onClick={togglePlayPause}/> : <PauseIcon onClick={togglePlayPause}/>} */}     
                        {isPlaying ? <PauseIcon onClick={togglePlayPause} /> : <PlayArrowIcon onClick={togglePlayPause} />}
                    </div>
                    <div ><SkipNextIcon onClick={playNextSong}/></div>
                    {/* <div style={{border:"1px solid red"}}><ShuffleIcon/></div> */}
                    <div><LoopIcon onClick={toggleLoop} style={{width:"18px"}}/></div>
                </div>
                <div className='music-player-process-sound' >
                    <div className='process-sound-inner'>
                        <h6 style={{paddingTop:"5px"}}>{formatTime(currentTime)}</h6>
                        <div className='music-progress-bar'>
                            <div style={{
                                height:"100%",
                                width:`${filled}%`,
                                backgroundColor:"orange",
                                transition:"width 0.5s"
                            }}></div>
                        </div>
                        <h6 style={{paddingTop:"5px"}}>{formatTime(duration)}</h6>
                    </div>
                    <div className='music-player-sound'>
                        {isMuted ? (
                            <VolumeOffIcon className="volume-icon" onClick={toggleMute} />
                            ) : (
                            <VolumeUpIcon className="volume-icon" onClick={toggleMute} />
                        )}
                    </div>
                </div>
                <div className='music-player-mini-music'>
                    <div className='music-player-mini'>
                        <div><img src={clickedOneSong.thumbnail} style={{width:"40px"}}/></div>
                        <div className='music-player-title'>
                            <h6 >Songs</h6>
                            <h6 >{clickedOneSong.title}</h6>
                        </div>
                    </div>
                    <div className='music-player-fav-add-user'>
                        {/* <FavoriteIcon className="fav-icon" onClick={handleFavSong} /> */}
                        <FavoriteIcon 
                            className="fav-icon" 
                            style={{ color: likedSong.some(song => song._id === clickedOneSong._id) ? 'red' : 'black' }}
                            onClick={handleFavSong} 
                        />
                        <div>
                            <PlaylistPlayIcon onClick={togglePlaylist}/>
                            {showPlaylist && (
                                <div className='playlist-container'>
                                    <MusicHistory/> 
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MusicPlayer