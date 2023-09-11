import React from 'react'
import go from "../img/DiscoverImg/go.svg";
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';

const MusicList = ({pageData}) => {
    const {songList,setSongList,setClickedOneSong} = useContext(MyContext);
    const handleMusicPageSong = (song) => {
        setSongList([...songList , song]);
        setClickedOneSong(song);
    }
    // console.log(songList);
    return (
    <div className="container">
        <div className="row mx-0 pb-5">
            {pageData && pageData.length > 0 ? (
                pageData.map((item) => (
                <div key={item.id} className="col-2 py-2" onClick={() => handleMusicPageSong(item)}>
                    {/* <div className="music_hovering"> */}
                    <div >
                        <div className="music_image">
                            <div className="music_main_img">
                                <img src={item.thumbnail} alt="" className="music" />
                            </div>
                            <div className="music_label">
                            <label>
                                {" "}
                                {item.title}<span>|</span> {item.artist[0].name}
                            </label>
                            <p className="sub_title"> {item.featured}</p>
                            </div>
                        </div>

                        <div className="hover_music_image">
                            <div className="svg_icon">
                                <img src={go} alt="go"/>
                            </div>
                            <div className="sub_icons">
                                <div className="icons ">
                                    <div className="love icons1">
                                        <a href=""><FavoriteIcon style={{color:"#fff"}}/></a>
                                    </div>
                                    <div className="user icons1"><PersonAddIcon style={{color:"#fff"}}/></div>
                                    <div className="3_dots icons1"><MoreHorizIcon style={{color:"#fff"}}/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    </div>
  )
}

export default MusicList;