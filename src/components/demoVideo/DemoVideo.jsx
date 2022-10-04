import React from 'react';
import './demoVideo.scss';
import video from '../../img/DemoVideoMain.mp4';

const DemoVideo = () => {
    return (
        <section id="DemoVideo" className="container">
            <div className="demoVideo">
                <div className="demoVideo_title">
                    <h6>demo video</h6>
                    <h2>Explore the Mr.SNARK app in real-time</h2>
                </div>

                <div className="demoVideo-content">
                    <div className="demoVideo-box">
                        <video controls src={video}></video>
                    </div>
                    <div className="demoVideo-text">
                        <h3 className="text-title">
                            On-Chain Analytics. Fundamental <br/> Screening. Signals. Intelligent News. <br/> Collaboration.
                        </h3>
                        <div className="demo-text-box">
                            <div className="text-item">
                                <span>Analyze</span>
                                <p>Compare on-chain metrics and broader cycle data, with select field customization.</p>
                            </div>
                            <div className="text-item">
                                <span>Screen</span>
                                <p>Access key network data including revenues, fees and TVL</p>
                            </div>
                            <div className="text-item">
                                <span>Visualize</span>
                                <p>Understand sector, sub-sector and ecosystems at a deeper level.</p>
                            </div>
                            <div className="text-item">
                                <span>Chat</span>
                                <p>Coordinate directly with like-minded Web3 investors via real-time messaging.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemoVideo;