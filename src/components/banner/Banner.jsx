import React, {useState} from 'react';
import './banner.scss';
import phone_1 from '../../img/phone_1.png';
import phone_2 from '../../img/phone_2.png';

const Banner = ({isActiveVideo, setIsActiveVideo}) => {

    return (
        <div className="banner-space">
            <section className="banner">
                <div className="container">
                    <div className="banner-content">
                        <h6>7 DAYS FREE TRIAL, $8.99/MO ($89.99 annual)</h6>
                        <h1>Democratizing <br/> Crypto Data</h1>
                        <p>Mr. SNARK is your resident unicorn butler,
                            providing the most tailored Web3 journey
                            from analytics to protocol screening,
                            on-chain metrics and visualization.
                        </p>
                        <div className="download-app">
                            <a href="https://apps.apple.com/us/app/mr-snark/id1620373335" target="_blank" className="download-item apple"></a>
                            <a href="https://play.google.com/store/apps/details?id=com.mrsnark" target="_blank" className="download-item google"></a>
                        </div>

                        <button onClick={() => {setIsActiveVideo(true)}} className="banner-video-btn">
                            <div className="video-img"></div>
                            <span className="video-text">watch the video</span>
                        </button>

                        <div className={isActiveVideo ? "video-link active" : "video-link"}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/rr1kl6n4Ljs"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>

                            <button className="video-close" onClick={() => {setIsActiveVideo(false)}}></button>
                        </div>

                        {isActiveVideo && <div onClick={() => {setIsActiveVideo(false)}} className="bg-dark"></div>}

                    </div>

                    <div className="banner-img">
                        <img className="phone_1" src={phone_1} alt="phone"/>
                        <img className="phone_2" src={phone_2} alt="phone"/>
                    </div>
                </div>
            </section>
        </div>


    );
};

export default Banner;