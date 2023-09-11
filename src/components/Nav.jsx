import React, { useContext, useState } from 'react'
import "../styles/Nav.css";
import { Link, useNavigate } from 'react-router-dom';
import soundLogo from "../img/soundCloudLogo.png";
import { MyContext } from '../context/MyContext';
import { useUserAuth } from '../auth/UserAuthContext';

const Nav = () => {
  const navigate = useNavigate();
  const {setInput} = useContext(MyContext);
  const {user , logOut} = useUserAuth();
  const handleKeyDown = (e) => {
      if(e.key === 'Enter'){
        e.preventDefault();
        navigate('/musics');
      }
  }
  const handleLogout = async () => {
    try {
      await logOut(); // Call the logOut function from the context
      navigate('/');
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <>
    <div className='nav-wrapper'>
      <div className='inner-nav-wrapper'>
        <div className='logo-img-div'>
        <Link to='/home'><img src={soundLogo} alt='soundLogo'/></Link>
        </div>
        <Link to='/home'><div className='homeBtn home-link-color'>Home</div></Link>
        <Link to='/feed'><div className='feedBtn feed-link-color'>Feed</div></Link>
        <Link to='/library'><div className='libraryBtn library-link-color'>Library</div></Link>
        <div>
          <input type='text' placeholder='Search' className='input-search' onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown}/>
        </div>
        <Link to='/trynextpro'><div className='try-next-proBtn'>Try Next Pro</div></Link>
        <div className='link-color'>{user ? user.displayName : ""}</div> 
        <button className="loginBtn" onClick={handleLogout}>{user ? "LOGOUT" : ""}</button>
      </div>
    </div>
    </>
  )
}

export default Nav