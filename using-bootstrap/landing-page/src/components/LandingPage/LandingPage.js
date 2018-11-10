import React, {Fragment} from 'react';

import NavBar from "../NavBar/NavBar";
import MainSection from "../MainSection/MainSection";
import AboutSection from "../AboutSection/AboutSection";
import SpeakersSection from "../SpeakersSection/SpeakersSection";
import ScheduleSection from "../ScheduleSection/ScheduleSection";
import RegisterButton from "../RegisterButton/RegisterButton";
import SubscribeSection from "../SubscribeSection/SubscribeSection";
import Footer from "../Footer/Footer";

const LandingPage = props => (
    <Fragment>
        <NavBar/>
        <MainSection/>
        <AboutSection/>
        <SpeakersSection/>
        <ScheduleSection/>
        <RegisterButton/>
        <SubscribeSection/>
        <Footer/>
    </Fragment>
);

export default LandingPage;
