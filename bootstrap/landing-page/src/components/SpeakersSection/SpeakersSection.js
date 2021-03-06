import React from 'react';

import AngieImage from '../../assets/images/angie.png';
import NodestradamusImage from '../../assets/images/nodestradamus.png';
import GeoImage from '../../assets/images/geo.png';
import EcmaImage from '../../assets/images/ecma.png';
import JayImage from '../../assets/images/jay.png';
import JsonImage from '../../assets/images/json.png';


const SpeakersSection = (props) => (
    <>
        <h1 className='display-4 text-center my-5 text-muted' id='speakers'>
            <strong>Speakers</strong>
        </h1>
        <div className='container'>
            <div className='row'>
                <div className="col-md-6 col-lg-4">
                    <div className="card mb-3">
                        <img className="card-img-top img-fluid" src={AngieImage} alt="Card image cap"/>
                        <div className="card-block p-3">
                            <h4 className="card-title">Angie McAngular</h4>
                            <p className="card-text">Angie is a web developer and teacher who is passionate about
                                building scalable,
                                data driven web apps, especially ones that address old problems with new tech!</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                    <div className="card mb-3">
                        <img className="card-img-top img-fluid" src={NodestradamusImage}
                             alt="Card image cap"/>
                        <div className="card-block p-3">
                            <h4 className="card-title">NodeStradamus</h4>
                            <p className="card-text">"NodeStra" is a software engineer and philosopher trying to leave
                                the world
                                better than he found it. He codes for non-profits, eCommerce, and large-scale web
                                apps.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                    <div className="card mb-3">
                        <img className="card-img-top img-fluid" src={GeoImage} alt="Card image cap"/>
                        <div className="card-block p-3">
                            <h4 className="card-title">Geo "Lo" Cation</h4>
                            <p className="card-text">Geo is a JavaScript developer working on large-scale applications.
                                He's also a
                                teacher who strives to support students in removing all barriers to learning code.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                    <div className="card mb-3">
                        <img className="card-img-top img-fluid" src={EcmaImage} alt="Card image cap"/>
                        <div className="card-block p-3">
                            <h4 className="card-title">Ecma Scriptnstuff</h4>
                            <p className="card-text">Ecma found her passion for computers and programming over 15 years
                                ago. She is
                                excited to introduce people to the wonderful world of JavaScript.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                    <div className="card mb-3">
                        <img className="card-img-top img-fluid" src={JayImage} alt="Card image cap"/>
                        <div className="card-block p-3">
                            <h4 className="card-title">Jay Query</h4>
                            <p className="card-text">Jay is a developer, author of CSS: The Missing Manual,
                                JavaScript &amp; jQuery:
                                The Missing Manual, and web development teacher.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                    <div className="card mb-3">
                        <img className="card-img-top img-fluid" src={JsonImage} alt="Card image cap"/>
                        <div className="card-block p-3">
                            <h4 className="card-title">Json Babel</h4>
                            <p className="card-text">All of his professional life, Json has worked with computers
                                online; he is a
                                polyglot programmer and likes using the right tools for the job.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default SpeakersSection;
