import React from 'react';
import DoneSharpIcon from '@mui/icons-material/DoneSharp';
import "../styles/TryNextPro.css";
import soundLogo from "../img/whiteLogo.png";
import looplogo from "../img/looplogo.png";
import dolor from "../img/dolor.png";
import circleLogo from "../img/circleLogo.png";
import starLogo from "../img/satrLogo.png";
import { useNavigate } from 'react-router';

const TryNextPro = () => {
    const navigate = useNavigate();

    const handlePaymentPage = () => {
        navigate('/paymentpage');
    }
  return(
    <>  
        <div className='heroimgTryNext'>
            <div className='trynextpro-container'>
                <div className='logoSide'>
                    <img className ="trynext-soundLogoImg" src={soundLogo} />
                    <div className='trynext-soundLogoTitle'>
                        <h2>SOUND CLOUD</h2>
                        <h5>FOR ARTISTS</h5>
                    </div>
                </div>
                <div className='trynext-titleSide'>
                    <h1 className='trynext-heading1'>Get Next Pro for $99/year</h1>
                    <h3 className='trynext-heading2'>Unlock the power of SoundCloud with our best plan for artists.</h3>
                    <h5 className='trynext-heading5'>* Discount applies only to first year of subscription.</h5>
                </div>
                <button className='trynext-getStarted-Btn' onClick={handlePaymentPage}>Get started</button>
                <div className='trynext-features-title'>
                    <div className='trynext-features-title1'>
                        <img src={looplogo}/>
                        <h2><DoneSharpIcon/> uploads</h2>
                        <h4>Upload as much music as you want with your community and collaborators</h4>
                    </div>
                    <div className='trynext-features-title2'>
                        <img src={dolor}/>
                        <h2>Get paid</h2>
                        <h4>Distribute your music on SoundCloud, Spotify, YouTube, and more</h4>
                    </div>
                    <div className='trynext-features-title3'>
                        <img src={starLogo}/>
                        <h2>Build your brand</h2>
                        <h4>Unlock advanced profile controls and promote your tracks</h4>
                    </div>
                    <div className='trynext-features-title4'>
                        <img src={circleLogo}/>
                        <h2>Grow your audience</h2>
                        <h4>Find who and where your fans are to plan promotion, releases, and tours</h4>
                    </div>
                </div>
            </div>
        </div>
        <div className='container'>
            {/* {plain parts} */}
            <h1 className='available-plains'>Available plans</h1>
            <div className='available-plains-wrapper'>
                <div className='next-plain'>
                    <h1>Next</h1>
                    <h2>Free</h2>
                    <button>You're on Next</button>
                    <div className='free-descriptions'>
                        <div className='right-tick'>
                            <div>
                                <DoneSharpIcon/>
                            </div>
                            <p>of track uploads</p>
                        </div>
                        <div className='right-tick'>
                        <div>
                                <DoneSharpIcon/>
                            </div><p>Share private tracks with collaborators</p>
                        </div>
                        <div className='right-tick'>
                            <div>
                                <DoneSharpIcon/>
                            </div>
                            <p>Post public tracks and hear from fans</p>
                        </div>
                        <div className='right-tick'>
                            <div>
                                <DoneSharpIcon/>
                            </div>
                            <p>Basic fan insights</p>
                        </div>
                    </div>
                </div>
                <div className='next-pro-plains'>
                    <h1>Next Pro</h1>
                    <div className='next-pro-price'>
                        <h3>Starting at</h3>
                        <h3>$8.25 / month</h3>
                    </div>
                    <button onClick={handlePaymentPage}>Get Next Pro</button>
                    <div className='next-pro-descriptions'>
                        <div className='right-tick'>
                            <p>Everything in Next and...</p>
                        </div>
                        <div className='right-tick'>
                            <DoneSharpIcon/>
                            <p>track uploads</p>
                        </div>
                        <div className='right-tick'>
                            <DoneSharpIcon/>
                            <p>distribution to Spotify, Apple Music, TikTok, and more</p>
                        </div>
                        <div className='right-tick'>
                            <DoneSharpIcon/>
                            <p>Custom profile control including track spotlight</p>
                        </div>
                        <div className='right-tick'>
                            <DoneSharpIcon/>
                            <p>Track management tools</p>
                        </div>
                        <div className='right-tick'>
                            <DoneSharpIcon/>
                            <p>Advanced fan insights and custom listening reports</p>
                        </div>
                        <div className='right-tick'>
                            <DoneSharpIcon/>
                            <p>Exclusive partner offers from Splice and more</p>
                        </div>
                        <div className='right-tick'>
                            <DoneSharpIcon/>
                            <p>3 free Mastering credits each month</p>
                        </div>
                        <div className='right-tick'>
                            <DoneSharpIcon/>
                            <p>Premium profile badge</p>
                        </div>
                    </div>
                </div>
            </div> 
            {/* {comapare features} */}
            <h1 className='compare-features'>Compare features.</h1>
            <div className='table-compare'>
                <table className='compare-feature-table'>
                    <thead>
                        <th></th>
                        <th>
                            <div className='compare-feature-heading2'>
                                <h1>Next</h1>
                                <h4>Free</h4>
                                <button className='compare-feature-btn-head'>You're on Next</button>
                            </div>
                        </th>
                        <th>
                            <div className='compare-feature-heading3'>
                                <h1>Next Pro</h1>
                                <h4>Starting at $8.25/month</h4>
                                <button onClick={handlePaymentPage} className='compare-feature-heading3-getBtn'>Get started</button>
                            </div>
                        </th>
                    </thead>
                    <tbody>
                        <tr className='comapre-feature-table-row'>
                            <td className='comapre-feature-table-col1'>Track uploads</td>
                            <td className='comapre-feature-table-col2'>Up to 3 hours</td>
                            <td className='comapre-feature-table-col3'>Unlimited</td>
                        </tr>
                        <tr className='comapre-feature-table-row'>
                            <td className='comapre-feature-table-col1'>Access to SoundCloud for Artists</td>
                            <td className='comapre-feature-table-col2'><DoneSharpIcon/></td>
                            <td className='comapre-feature-table-col3'><DoneSharpIcon/></td>
                        </tr>
                        <tr className='comapre-feature-table-row'>
                            <td className='comapre-feature-table-col1'>Private track uploads for sharing with collaborators and fans</td>
                            <td className='comapre-feature-table-col2'><DoneSharpIcon/></td>
                            <td className='comapre-feature-table-col3'><DoneSharpIcon/></td>
                        </tr>
                        <tr className='comapre-feature-table-row'>
                            <td className='comapre-feature-table-col1'>Public track uploads, comments, fan messages, and downloads</td>
                            <td className='comapre-feature-table-col2'><DoneSharpIcon/></td>
                            <td className='comapre-feature-table-col3'><DoneSharpIcon/></td>
                        </tr>
                        <tr className='comapre-feature-table-row'>
                            <td className='comapre-feature-table-col1'>Customizable artist profile and bio</td>
                            <td className='comapre-feature-table-col2'><DoneSharpIcon/></td>
                            <td className='comapre-feature-table-col3'><DoneSharpIcon/></td>
                        </tr>
                        <tr className='comapre-feature-table-row'>
                            <td className='comapre-feature-table-col1'>Ability to request profile verification</td>
                            <td className='comapre-feature-table-col2'><DoneSharpIcon/></td>
                            <td className='comapre-feature-table-col3'><DoneSharpIcon/></td>
                        </tr>
                        <tr className='comapre-feature-table-row'>
                            <td className='comapre-feature-table-col1'>Direct fan donations via PayPal, Cash App, Venmo, and more</td>
                            <td className='comapre-feature-table-col2'><DoneSharpIcon/></td>
                            <td className='comapre-feature-table-col3'><DoneSharpIcon/></td>
                        </tr>
                        <tr className='comapre-feature-table-row'>
                            <td className='comapre-feature-table-col1'>global release distribution to 60+ social networks and streaming platforms including Spotify, Apple Music, TikTok, and more</td>
                            <td className='comapre-feature-table-col2'></td>
                            <td className='comapre-feature-table-col3'><DoneSharpIcon/></td>
                        </tr>
                        <tr className='comapre-feature-table-row'>
                            <td className='comapre-feature-table-col1'>Automatic release distribution to newly added streaming platforms</td>
                            <td className='comapre-feature-table-col2'></td>
                            <td className='comapre-feature-table-col3'><DoneSharpIcon/></td>
                        </tr>
                        <tr className='comapre-feature-table-row'>
                            <td className='comapre-feature-table-col1'>Permanent release distribution with regular and uninterrupted royalty payments</td>
                            <td className='comapre-feature-table-col2'></td>
                            <td className='comapre-feature-table-col3'><DoneSharpIcon/></td>
                        </tr>
                        <tr className='comapre-feature-table-row'>
                            <td className='comapre-feature-table-col1'>Access to YouTube Content ID, allowing you to be paid when your music is used on YouTube</td>
                            <td className='comapre-feature-table-col2'></td>
                            <td className='comapre-feature-table-col3'><DoneSharpIcon/></td>
                        </tr>
                        <tr className='comapre-feature-table-row'>
                            <td className='comapre-feature-table-col1'>Monetize on SoundCloud with fan-powered royalties, our equitable approach which pays artists based on fan listening habits</td>
                            <td className='comapre-feature-table-col2'></td>
                            <td className='comapre-feature-table-col3'><DoneSharpIcon/></td>
                        </tr>
                        <tr className='comapre-feature-table-row'>
                            <td className='comapre-feature-table-col1'>Access to SoundCloud for Artist's promotional toolkit, including SoundCloud Radio on SiriusXM</td>
                            <td className='comapre-feature-table-col2'></td>
                            <td className='comapre-feature-table-col3'><DoneSharpIcon/></td>
                        </tr>
                        <tr className='comapre-feature-table-row'>
                            <td className='comapre-feature-table-col1'>Scheduled track releases on SoundCloud and other streaming platforms</td>
                            <td className='comapre-feature-table-col2'></td>
                            <td className='comapre-feature-table-col3'><DoneSharpIcon/></td>
                        </tr>
                        <tr className='comapre-feature-table-row'>
                            <td className='comapre-feature-table-col1'>Split royalty payments between you and your collaborators</td>
                            <td className='comapre-feature-table-col2'></td>
                            <td className='comapre-feature-table-col3'><DoneSharpIcon/></td>
                        </tr>
                        <tr className='comapre-feature-table-row'>
                            <td className='comapre-feature-table-col1'>Access to priority SoundCloud help and support</td>
                            <td className='comapre-feature-table-col2'></td>
                            <td className='comapre-feature-table-col3'><DoneSharpIcon/></td>
                        </tr>
                        <tr className='comapre-feature-table-row'>
                            <td className='comapre-feature-table-col1'>Advanced listener stats & insights, including top listeners, locations, and sources</td>
                            <td className='comapre-feature-table-col2'></td>
                            <td className='comapre-feature-table-col3'><DoneSharpIcon/></td>
                        </tr>
                        <tr className='comapre-feature-table-row'>
                            <td className='comapre-feature-table-col1'>Over $1,500 worth of savings on exclusive offers & discounts from partners like Splice, Serato, and Tracklib</td>
                            <td className='comapre-feature-table-col2'></td>
                            <td className='comapre-feature-table-col3'><DoneSharpIcon/></td>
                        </tr>
                        <tr className='comapre-feature-table-row'>
                            <td className='comapre-feature-table-col1'>Spotlight your best tracks and playlists by pinning them at the top of your profile</td>
                            <td className='comapre-feature-table-col2'></td>
                            <td className='comapre-feature-table-col3'><DoneSharpIcon/></td>
                        </tr>
                        <tr className='comapre-feature-table-row'>
                            <td className='comapre-feature-table-col1'>Replace a SoundCloud track while maintaining your play and like counts</td>
                            <td className='comapre-feature-table-col2'></td>
                            <td className='comapre-feature-table-col3'><DoneSharpIcon/></td>
                        </tr>
                        <tr className='comapre-feature-table-row'>
                            <td className='comapre-feature-table-col1'>Access to YouTube Content ID, allowing you to be paid when your music is used on YouTube</td>
                            <td className='comapre-feature-table-col2'></td>
                            <td className='comapre-feature-table-col3'><DoneSharpIcon/></td>
                        </tr>
                        <tr className='comapre-feature-table-row'>
                            <td className='comapre-feature-table-col1'>Free track mastering up to 3 times per month, powered by Dolby</td>
                            <td className='comapre-feature-table-col2'></td>
                            <td className='comapre-feature-table-col3'><DoneSharpIcon/></td>
                        </tr>
                        <tr className='comapre-feature-table-row'>
                            <td className='comapre-feature-table-col1'>Premium profile badge visible to fans and collaborators</td>
                            <td className='comapre-feature-table-col2'></td>
                            <td className='comapre-feature-table-col3'><DoneSharpIcon/></td>
                        </tr>
                    </tbody>
                </table>
            </div>    
        </div> 
    </>
  )
}

export default TryNextPro;