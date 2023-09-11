import React, { useContext } from 'react'
import "../styles/HomeRightSideBar.css";
import appleIcon from "../img/apple-xxl.png";
import playstoreIcon from "../img/playstoreIcon.png";
import { Link } from 'react-router-dom';
import { MyContext } from '../context/MyContext';

const HomeRightSideBar=()=>{
    const{songList,setSongList} = useContext(MyContext);
    // console.log(songList);

    const handleHistoryBtn = (data) => {
        // console.log(data);
        setSongList([ ...songList,data]);
    }
    return(
    <div className='home-rightsidebar-wrapper'>
        <div className='rightsidebar-headings'>
            <h4>Listening history</h4>
            <h4>View all</h4>
        </div>
        <div className='rightsidebar-historyList' style={{paddingTop:"5px"}}>
            <div className='history-list-container'>
                {/* Your mapping logic */}
                {songList.map((data)=>(
                    <div key={data.id} className='selectedDataDiv' style={{cursor:"pointer" }} onClick={() => handleHistoryBtn(data)}>
                        <img src={data.thumbnail} style={{width:"50px"}}/>
                        <div className='selectedDataDiv-details'>
                            <h6 style={{minHeight:"10px",maxHeight:"30px" , overflow:"hidden"}}>{data.title}</h6>
                            <h6 className='selectedData-artist-name'>{data.artist[0].name}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className='rightsidebar-app-links'>
            <h4 className='rightsidebar-gomobile'>Go mobile</h4>
            <div className='rightsidebar-links-images'>
                <Link to="https://apps.apple.com/us/app/soundcloud/id336353151">
                    <div className='appleIconBox'>
                        <img src={appleIcon} className='appleicon'/>
                        <div className='apple-details'>
                            <h6>Download on the</h6>
                            <h3>App Store</h3>
                        </div>
                    </div>
                </Link>
                <Link to="https://play.google.com/store/apps/details?id=com.soundcloud.android&hl=us&referrer=utm_source%3Dsoundcloud%26utm_medium%3Dweb%26utm_campaign%3Dweb_xsell_discover_page">
                    <div className='playStoreIconBox'>
                        <img src={playstoreIcon} className='playstoreIcon'/>
                        <div className='playstore-details'>
                            <h6>GET IT ON</h6>
                            <h3>Google Play</h3>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
        <div className='rightsidebar-descriptions'>
            <div className='description-1'>
                <Link to='/work'><h5>Legal</h5></Link>
                <h5>-</h5>
                <Link to='/work'><h5>Privacy</h5></Link>
                <h5>-</h5>
                <Link to='/work'><h5>Cookie Policy</h5></Link>
                <h5>-</h5>
                <Link to='/work'><h5>Consent Manager</h5></Link>
                <h5>-</h5>
            </div>
            <div className='description-2'>
                <Link to='/work'><h5>Imprint</h5></Link>
                <h5>-</h5>
                <Link to='/work'><h5>Artist Resources</h5></Link>
                <h5>-</h5>
                <Link to='/work'><h5>Blog</h5></Link>
                <h5>-</h5>
                <Link to='/work'><h5>Charts</h5></Link>
                <h5>-</h5>
            </div>
            <div className='description-3'>
                <h5>Language:</h5>
                <h5>English (US)</h5>
            </div>
        </div>
    </div>
  )
};

export default HomeRightSideBar;