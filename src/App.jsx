import React, { useState,useEffect,useContext } from 'react'
import "./App.css";
import Nav from "./components/Nav.jsx";
import {Routes,Route,useLocation, useNavigate} from "react-router-dom";
import Home from './container/Home';
import Feed from './container/Feed';
import Library from './container/Library';
import TryNextPro from './container/TryNextPro';
import { MyContext } from './context/MyContext';
import WorkInProgress from './container/WorkInProgress';
import PaymentPage from './container/PaymentPage';
import MusicPage from './container/MusicPage';
import Discover from './container/Discover';
import MusicPlayer from './components/MusicPlayer'
import PaymentStatus from './components/PaymentStatus';
import {auth} from "./auth/config"
import { UserAuthContextProvider } from './auth/UserAuthContext.jsx';

const App = () => {
  const {songPlay,value,songList} = useContext(MyContext);
  const location = useLocation();
  const navigate = useNavigate();
  const[username,setUserName] = useState('');


  console.log(songList.length);
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUserName(user.displayName);
        console.log(username);
      }else{
        setUserName("");
        // window.alert('You need to log in to access this page.');
        navigate("/"); 
      }
    });
  },[navigate]);
  
  const notAllowNavPaths = ['/'];
  const allowedpaths = ['/home','/library','/musics'];
  
  const shouldDisplayMusicPlayer = allowedpaths.includes(location.pathname);
  const shouldDisplayNavBar = notAllowNavPaths.includes(location.pathname);

  return (
    <>
    <UserAuthContextProvider>
      {!shouldDisplayNavBar && <Nav/>}
        <Routes>
          <Route path="/" element={<Discover />} />
          <>
            {username && (
              <>
                <Route path="/home" element={<Home/>}/>
                <Route path="/feed" element={<Feed />}/>
                <Route path="/library" element={<Library />}/>
                <Route path="/trynextpro" element={<TryNextPro />}/>
                <Route path="/paymentstatus" element={<PaymentStatus/>} />
                <Route path="/paymentpage" element={<PaymentPage />}/>
                <Route path="/work" element={<WorkInProgress />}/>
              </>
            )}
            <Route path="/musics" element={<MusicPage />} />
          </>
        {/* )} */}
        </Routes>
        {shouldDisplayMusicPlayer && <MusicPlayer songs={songPlay} />}
      </UserAuthContextProvider>
    </>
  )
}

export default App