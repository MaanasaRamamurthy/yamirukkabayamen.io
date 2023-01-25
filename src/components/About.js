import React from "react";
// import author from "../assets/author1.jpg"
import "../css/About.css"
import Reviews from "./Reviews"
import classNames from 'classnames';
import Header from "./Header"
// import background from "../assets/bg.jpeg"
import { Outlet, Link } from "react-router-dom";

import Slideshow from "./Slideshow";

import image from "../assets/bg4.jpg"
import image1 from "../assets/red.jpg"
import image2 from "../assets/bg.jpeg"
import green from "../assets/greengalaxy.jpg"

// import Video from "./LatestVideo"
import { useTranslation } from 'react-i18next';


export default function About(){
    const { t } = useTranslation();
    const channelID = "UCPVBGzVgZZBsDqnDgjK4RrQ"
    const [videos, setVideos] = React.useState([]);

    const images =  [{ url: 'images/about2.jpg' }, { url: 'images/author1.jpg' }, { url: 'images/bg5.jpg' }, { url: 'images/greenbg.jpg' }];

    const baseUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D';

    React.useEffect(() => {
        (async () => {
            if(channelID){
                try {
                    const data = await fetch(`${baseUrl}${channelID}`).then(response => response.json());
                    setVideos(data.items);
                } catch (error) {
                    console.log(error);
                }
            }
               
            
        })();
    }, [channelID]);


const images1 = ["bg4", "bg2","eg"]
    const video_display=videos.map(video => <Video key={video.guid} video={video} />)
    return(
        <div className="Total1"> 
            <Header />
            <div className="about">
                <Slideshow
                    interval={300000000}
                    images={[
                        image,
                        image1,
                        image2
                    ]}
                    />
                
      
                <div className="content">
                    <p id="about-desc">{t('Example.1')}</p>
                    <Link to="/calendar"><button className="booking">BOOK AN APPOINTMENT</button></Link>
                </div>
            </div>
            {/* <h1>Milestone</h1>
            <div className="Stats">
                <div className="Count">
                    <h1>X</h1>
                    <p style={{    fontWeight: 700,
                                    fontStyle: 'normal',
                                    fontSize: '17px',
                                    letterSpacing: '.15em',
                                    textTransform: 'uppercase'}}>Years of experiance</p>
                </div>
                <div className="Count">
                    <h1 className="auto" data-val="20000">xxx</h1>
                    <p style={{    fontWeight: 700,
                                    fontStyle: 'normal',
                                    fontSize: '17px',
                                    letterSpacing: '.15em',
                                    textTransform: 'uppercase'}}>Trusted Customers</p>
                </div>
                <div className="Count">
                    <h1>467K</h1>
                    <p style={{    fontWeight: 700,
                                    fontStyle: 'normal',
                                    fontSize: '17px',
                                    letterSpacing: '.15em',
                                    textTransform: 'uppercase'}}>Followers on YouTube</p>
                </div>
            </div> */}
            {/* <Reviews /> */}
            <div className="app-container">
                <h1>Follow us on YouTube for regular updates</h1>
                <div className="videos">
                {/* <ReactCardSlider slides={video_display}/> */}
                {videos.slice(0,4).map(video => <Video key={video.guid} video={video} />)}
                </div>
                <div className="go-to-channel">
                    <button className="booking"><a href="https://www.youtube.com/c/Yamirukkabayamen">Go To Channel {'>>>'}</a></button>
                </div>
            </div>
            <Outlet/>
        </div>
    )
}

export function Video (props) {
    
    return(
        <div className="videos__item">
            <div className="video__image">
                <a target="_blank" href={props.video.link}>
                    <img src={`https://i4.ytimg.com/vi/${props.video.guid.split(':')[2]}/mqdefault.jpg`} />
                </a>
            </div>
            <div className="video__footer">
                <p>{props.video.title}</p>
            </div>
        </div>
)}