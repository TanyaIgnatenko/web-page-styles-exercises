import React, {Fragment} from 'react';

import AngieAvatar from '../../assets/images/avatar-angie.png';
import NodestradamusAvatar from '../../assets/images/avatar-nodestradamus.png';
import GeoAvatar from '../../assets/images/avatar-geo.png';
import EcmaAvatar from '../../assets/images/avatar-ecma.png';
import JayAvatar from '../../assets/images/avatar-jay.png';
import JsonAvatar from '../../assets/images/avatar-json.png';

import './ScheduleSection.scss';


const ScheduleSection = (props) => (
    <>
        <h1 className="display-4 text-center my-3 text-muted" id='schedule'>
            <strong>Schedule</strong>
        </h1>
        <ul className="list-group">
            <li className='list-group-item'>
                <a data-toggle="collapse" href="#collapseExample">
                    <div className='media'>
                        <img className="img-fluid rounded-circle schedule-item-icon mr-3 avatar"
                            src={NodestradamusAvatar}
                        />
                        <div className='media-body'>
                            <h4 className="list-group-item-heading">Keynote: Internet of Things
                                <span className="badge badge-primary badge-pill float-right">9:00am</span>
                            </h4>
                            NodeStradamus
                        </div>
                    </div>
                </a>
                <div className="collapse" id="collapseExample" data-toggle="collapse" data-target="#collapseExample"
                     aria-expanded="false" aria-controls="collapseExample">
                    <div className="card-body">
                        <hr/>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                        Nihil
                        anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <a data-toggle="collapse" href="#collapseExample2">
                    <div className='media'>
                        <img className="img-fluid rounded-circle schedule-item-icon mr-3 avatar"
                             src={AngieAvatar}
                        />
                        <div className='media-body'>
                            <h4 className="list-group-item-heading">Angular Basics <span
                                className="badge badge-primary badge-pill float-right">10:00am</span>
                            </h4>
                            Angie McAngular
                        </div>
                    </div>
                </a>
                <div className="collapse" id="collapseExample2" data-toggle="collapse" data-target="#collapseExample2"
                     aria-expanded="false" aria-controls="collapseExample">
                    <div className="card-body">
                        <hr/>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                        Nihil
                        anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <a data-toggle="collapse" href="#collapseExample3">
                    <div className='media'>
                        <img className="img-fluid rounded-circle schedule-item-icon mr-3 avatar"
                             src={JayAvatar}
                        />
                        <div className='media-body'>
                            <h4 className="list-group-item-heading">Hey, Mongo! <span
                                className="badge badge-primary badge-pill float-right">11:00am</span>
                            </h4>
                            Jay Query
                        </div>
                    </div>
                </a>
                <div className="collapse" id="collapseExample3" data-toggle="collapse" data-target="#collapseExample"
                     aria-expanded="false" aria-controls="collapseExample">
                    <div className="card-body">
                        <hr/>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                        Nihil
                        anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                </div>
            </li>
            <li className="list-group-item list-group-item-success">
                <a data-toggle="collapse" href="#collapseExample4">
                    <div className='media'>
                        <div className='media-body'>
                            <h4 className="list-group-item-heading">Lunch <span
                                className="badge badge-primary badge-pill float-right">12:00pm</span></h4>
                            Free pizza for everyone!
                        </div>
                    </div>
                </a>
                <div className="collapse" id="collapseExample4" data-toggle="collapse" data-target="#collapseExample"
                     aria-expanded="false" aria-controls="collapseExample">
                    <div className="card-body">
                        <hr/>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                        Nihil
                        anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <a data-toggle="collapse" href="#collapseExample5">
                    <div className='media'>
                        <img className="img-fluid rounded-circle schedule-item-icon mr-3 avatar"
                             src={EcmaAvatar}
                        />
                        <div className='media-body'>
                            <h4 className="list-group-item-heading">Introducing ES2015 <span
                                className="badge badge-primary badge-pill float-right">1:00pm</span></h4>
                            Ecma Scriptnstuff
                        </div>
                    </div>
                </a>
                <div className="collapse" id="collapseExample5" data-toggle="collapse" data-target="#collapseExample"
                     aria-expanded="false" aria-controls="collapseExample">
                    <div className="card-body">
                        <hr/>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                        Nihil
                        anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <a data-toggle="collapse" href="#collapseExample6">
                    <div className='media'>
                        <img className="img-fluid rounded-circle schedule-item-icon mr-3 avatar"
                             src={GeoAvatar}
                        />
                        <div className='media-body'>
                            <h4 className="list-group-item-heading">Gettin' MEAN <span
                                className="badge badge-primary badge-pill float-right">2:00pm</span>
                            </h4>
                            Geo "Lo" Cation
                        </div>
                    </div>
                </a>
                <div className="collapse" id="collapseExample6" data-toggle="collapse" data-target="#collapseExample"
                     aria-expanded="false" aria-controls="collapseExample">
                    <div className="card-body">
                        <hr/>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                        Nihil
                        anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <a data-toggle="collapse" href="#collapseExample7">
                    <div className='media'>
                        <img className="img-fluid rounded-circle schedule-item-icon mr-3 avatar"
                             src={JsonAvatar}
                        />
                        <div className='media-body'>
                            <h4 className="list-group-item-heading">What's Babel? <span
                                className="badge badge-primary badge-pill float-right">3:00pm</span>
                            </h4>
                            Json Babel
                        </div>
                    </div>
                </a>
                <div className="collapse" id="collapseExample7" data-toggle="collapse" data-target="#collapseExample"
                     aria-expanded="false" aria-controls="collapseExample">
                    <div className="card-body">
                        <hr/>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                        Nihil
                        anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                </div>
            </li>
        </ul>
    </>
);

export default ScheduleSection;
