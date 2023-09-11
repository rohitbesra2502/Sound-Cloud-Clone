import React, {useEffect, useState ,useContext} from "react";
import "../styles/Discover.css";
import appstore from "../img/DiscoverImg/appstore.png";
import google_play from "../img/DiscoverImg/google_play.png";
import never_stop_listening from "../img/DiscoverImg/never_stop_listening.jpg";
import logo1 from "../img/DiscoverImg/logo1.svg";
import logo2 from "../img/DiscoverImg/logo2.png";
import MusicList from "../components/MusicList";
import "../styles/Signup.css";
import LoginModal from "../components/LoginModal.jsx";
import SignupModal from "../components/SignupModal";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../context/MyContext";

const Discover = () => {
  const [pageData, setPageData] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
  const navigate = useNavigate();
  const {setInput} = useContext(MyContext);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const openLoginModal = () => {
    setModalOpen(true);
  };
  const openSignUpModal = () => {
    setSignUpModalOpen(true);
  };

  const closeSignUpModal = () => {
      setSignUpModalOpen(false);
  };

  // page1data
  useEffect(() => {
    fetch(
      "https://academics.newtonschool.co/api/v1/music/song?page=1&limit=12",
      {
        headers: {
          projectId: "8nbih316dv01",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPageData(data.data);
        // Handle the data from the API response
        // console.log(data);
      })
      .catch((error) => {
        // Handle errors
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  // const handleKeyDown = (e) => {
  //   if(e.key === 'Enter'){
  //     e.preventDefault();
  //     navigate('/musics');
  //   }
  // }
  return (
    <div className="discover-wrapper">
      <div className="container hero">
        <div>
          <header>
            <div className="header_start">
              <div className="row mx-0 py-3">
                <div className="col-6">
                  <div className="logo">
                    <img src={logo1} alt="logo1" />
                    <img src={logo2} alt="logo1" className="logo2_resizer" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="btn_main">
                    <div className="btn_0 sign_in">
                      <input type="button" value="Sign in" onClick={openModal}/>
                    </div>

                    <div className="create_account btn_0">
                      <input type="button" value="create account" onClick={openSignUpModal}/>
                    </div>

                    <div className="Artists btn_0">
                      <input type="button" value="For Artists" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="landing_content">
                <div className="Hero_content ">
                  <h2 className="content_title">Connect on SoundCloud</h2>
                  <p className="content_subtitle">
                    Discover, stream, and share a constantly expanding mix of
                    music from emerging and major artists around the world.
                  </p>
                  <div className="Hero_btn_container">
                    <div className="create_account btn_0">
                      <input type="button" value="Sign up for free" onClick={openSignUpModal}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className="hero_search_contain py-4">
          <div className="seacrh_content">
            <div className="search_btn">
              {/* <input type='text' placeholder='Search for artists, bands, tracks, podcasts' className='input-search' onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown}/> */}
              {/* <input type="text" onClick={(e)=> setInput(e.target.value)} onKeyDown={handleKeyDown}/> */}
            </div>
            {/* <div className="or_content">or</div>
            <div className="input_Upload">
              <Link to='/work'><input type="button" value="Upload Your Own" /></Link>
            </div> */}
          </div>

          <div className="mucis_heading text-center">
            <h2>Hear what’s trending for free in the SoundCloud community</h2>
          </div>
        </div>
        <div className="container" >
          <MusicList pageData={pageData}/>
          <div className="mucis_heading text-center input_Upload">
            {/* <input
              type="button"
              value="Explore trending playlists "
              className="px-4"
            /> */}
          </div>
        </div>
        <div className="pt-5  store_section mt-5">
          <div
            className="container bg_muter"
          >
            <div className="row mx-0 pt-4">
              <div className="col-sm-8">
                <div className="mobile_tab">
                  <img src={never_stop_listening} alt="" />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="never_stop">
                  <h2>Never stop listening</h2>
                  <hr className="hr_design" />

                  <p className="never_stop_para">
                    SoundCloud is available on Web, iOS, Android, Sonos,
                    Chromecast, and Xbox One.
                  </p>

                  <div className="store_btn">
                    <Link to='https://apps.apple.com/us/app/soundcloud/id336353151'>
                      <img src={appstore} />
                    </Link>
                    <Link to='https://play.google.com/store/apps/details?id=com.soundcloud.android&hl=us'>
                      <img src={google_play} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="img_banner">
            <div className="row mx-0 py-4">
              <div className="col-6">
                <div className="creater-img py-3">
                  <h2 className="text-white">Calling all creators</h2>
                  <p className="text-white">
                    Get on SoundCloud to connect with fans, share your sounds,
                    and grow your audience. What are you waiting for?
                  </p>
                  <div className="btn_main btn_main1">
                    <div className="btn_0  sign_in">
                      <input type="button" value="Find out more" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">&nbsp;</div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="landing_content">
            <div className="Hero_content ">
              <h2 className="content_title text-dark">
                Thanks for listening. Now join in.
              </h2>
              <p className="content_subtitle text-dark">
                Save tracks, follow artists and build playlists. All for free.
              </p>
              <div className="Hero_btn_container">
                <div className="create_account btn_0">
                  <input type="button" value="create account" onClick={openSignUpModal}/>
                </div>
              </div>
              <div className="already_account pt-4">
                <div className="para">
                  <span className="text-dark ">Already have an account? </span>
                  <div className="btn_0 sign_in">
                      <input type="button" value="Sign in" onClick={openModal}/>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <LoginModal isModalOpen={isModalOpen} openModal={openModal} closeModal={closeModal} openLoginModal={openLoginModal} />
        <SignupModal isSignUpModalOpen={isSignUpModalOpen} closeSignUpModal={closeSignUpModal} />
      </div>
    </div>
  )
}

export default Discover;
