import React from 'react';
import "../css/index.css";

import facebook from '../images/ic_black_facebook.png';
import twitter from '../images/ic_black_twitter.png';
import linkedin from '../images/ic_black_linkedin.png';
import github from '../images/ic_black_github.png';
import youtube from '../images/ic_black_youtube.png';

class ContactsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div className={'contacts-contents-container'}>
                <div className={'contacts-social-container'}>
                    <a href="https://www.facebook.com/hackbotone/" target="_blank"><img src={facebook} className={'contact-social-img'}/></a>
                    <a href="https://twitter.com/anspattnaik" target="_blank"><img src={twitter} className={'contact-social-img'}/></a>
                    <a href="https://www.linkedin.com/in/anshuman123/" target="_blank"><img src={linkedin} className={'contact-social-img'}/></a>
                    <a href="https://github.com/anshumanpattnaik" target="_blank"><img src={github} className={'contact-social-img'}/></a>
                    <a href="https://www.youtube.com/anshumanpattnaik" target="_blank"><img src={youtube} className={'contact-social-img'}/></a>
                </div>
                <div className={'contacts-footer-div'}></div>
                <p className={'contacts-footer-text'}>© 2020 HACKBOTONE. ALL RIGHTS RESERVED.</p>
            </div>
        );
    }
}

export default ContactsComponent;