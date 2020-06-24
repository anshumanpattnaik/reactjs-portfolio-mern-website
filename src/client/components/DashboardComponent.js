import React from 'react';
import "../css/index.css";

import logo from '../images/ic_logo.png';
import down_arrow from '../images/ic_down_arrow.png';

import ProfileComponent from './ProfileComponent';
import SkillSetsComponent from './SkillSetsComponent';
import ProjectsComponent from './ProjectsComponent';
import BlogsComponent from './BlogsComponent';
import ContactsComponent from './ContactsComponent';

class DashboardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabItem: ['HOME', 'SKILLS', 'PROJECTS', 'BLOGS'],
            selectedItem: 'HOME'
        }
    }

    componentDidMount() {

    }

    setSelectedTab = (item) => {
        this.setState({
            selectedItem: item
        })
    }

    renderTabContents = () => {
        var tabItem = this.state.selectedItem;
        if (tabItem === 'HOME') {
            return (
                <ProfileComponent />
            )
        }
        if (tabItem === 'SKILLS') {
            return (
                <SkillSetsComponent />
            )
        }
        if (tabItem === 'PROJECTS') {
            return (
                <ProjectsComponent />
            )
        }
        if (tabItem === 'BLOGS') {
            return (
                <BlogsComponent />
            )
        }
    }

    render() {
        return (
            <div className={'dashboard-parent-container'}>
                <div className={'mobile-parent-container'}>
                    <div className={'mobile-header-container'}>
                        <img src={logo} className={'mobile-logo'} />
                    </div>
                    <div className={'mobile-body-container'}>
                        {this.renderTabContents()}
                    </div>
                    <div className={'mobile-footer-container'}>
                        {this.state.tabItem.map(data =>
                            <div key={data} className={this.state.selectedItem === data ? 'bottom-menu-item-selected-container' : 'bottom-menu-item-container'} onClick={this.setSelectedTab.bind(this, data)}>
                                <span className={this.state.selectedItem === data ? 'bottom-menu-selected-item-txt' : 'bottom-menu-item-txt'}>{data}</span>
                            </div>
                        )}
                    </div>
                </div>
                <div className={'desktop-parent-container'}>
                    <div className={'menu-bar-container'}>
                        <div className={'logo-container'}>
                            <img src={logo} className={'logo'} />
                        </div>
                        <div className={'menu-item-container'}>
                            <a href="#" className={'menu-item-txt'}><span>HOME</span></a>
                            <a href="#skills" className={'menu-item-txt'}><span>SKILLS</span></a>
                            <a href="#projects" className={'menu-item-txt'}><span>PROJECTS</span></a>
                            <a href="#blogs" className={'menu-item-txt'}><span>BLOGS</span></a>
                            <a href="#contacts" className={'menu-item-txt'}><span>CONTACTS</span></a>
                        </div>
                    </div>
                    <ProfileComponent />
                    <div className={'dashboard-down-arrow-container'}>
                        <a href="#skills" className={'menu-item-txt'}><img src={down_arrow} className={'dashboard-down-arrow'} /></a>
                    </div>
                    <div id={"skills"} className={'dashboard-skill-sets-container'}>
                        <div className={'skills-container'}>
                            <span className={'dashboard-skills-label'}>Technical Skills</span>
                        </div>
                        <SkillSetsComponent />
                    </div>
                    <div id={'projects'} className={'projects-parent-container'}>
                        <div className={'skills-container'}>
                            <span className={'dashboard-skills-label'}>Projects</span>
                        </div>
                        <ProjectsComponent />
                    </div>
                    <div id={'blogs'} className={'blogs-parent-container'}>
                        <div className={'skills-container'}>
                            <span className={'dashboard-skills-label'}>Blogs</span>
                        </div>
                        <BlogsComponent />
                    </div>
                    <div id={'contacts'} className={'contacts-parent-container'}>
                        <div className={'skills-container'}>
                            <span className={'dashboard-skills-label'}>Contacts</span>
                        </div>
                        <ContactsComponent />
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardComponent;