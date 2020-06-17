import React from 'react';
import "../css/index.css";

import { connect } from 'react-redux';

import banner from "../images/ic_banner.png";
import profile from "../images/ic_profile_img.jpg";

class DashboardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    componentDidMount() {
        console.log('Dashboard')
    }

    render() {
        return (
            <div className={'dashboard-parent-container'}>
                <div className={'dashboard-header-container'}>
                    <div className={'dashboard-banner-overlay'}></div>
                    <div className={'dashboard-profile-div'}>
                        <div className={'dashboard-profile-img-container'}>
                            <img src={profile} className={'dashboard-profile-img'}/>
                        </div>
                        <div className={'dashboard-profile-details-container'}>
                            <p className={'dashboard-profile-name-label'}>Hello, I'm <span className={'dashboard-profile-name'}>Anshuman Pattnaik</span></p>
                            <p className={'dashboard-profile-deatils'}>
                                I'm a Senior Software Engineer specialized in Android & Web application development, having fluent knowledge in the Android framework and developed many mobile applications from various domains such as (Payment, IoT, Graphics, Augmented Reality & Virtual Reality) and also developed cross-platform based mobile application using React-Native framework. In terms of the Web framework having experience in both back-end and front-end development, developed many full-stack based web application using Node.js, React.js & MongoDB.
                            </p>
                            <p className={'dashboard-profile-deatils'}>
                                To improve my skill sets in security I like to participate in various Bug Bounty programs (Bugcrowd, HackerOne & many others) In Bug Bounty programs, I found many vulnerabilities that come under OWASP top 10.                                
                            </p>
                            <p className={'dashboard-profile-deatils'}>
                                As a hobby love to make games using Unity3d game engine and to share my work with developer communities I write <a href="https://hackbotone.com/" className={'profile-details-link'} target="_blank">blogs</a> and make tutorial videos on my <a href="https://www.youtube.com/anshumanpattnaik" className={'profile-details-link'} target="_blank">Youtube channel.</a>
                            </p>
                        </div>
                    </div>
                    <img src={banner} className={'dashboard-banner-img'}/>
                </div>
            </div>
        );
    }
}

const stateProps = state => ({
    
});

const dispatchProps = dispatch => ({
    
});

//export default connect(null, dispatchProps)(DashboardComponent);
export default DashboardComponent;