import React from 'react';
import "../css/index.css";

import { connect } from 'react-redux';

import { fetchProjects } from '../actions';

class ProjectsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabItem: ['All', 'Web', 'Mobile'],
            selectedItem: 'All'
        }
    }

    componentDidMount() {
        this.props.fetchProjects();
    }

    setSelectedTab = (item) => {
        this.setState({
            selectedItem: item
        })
    }

    renderProjects = (results) => {
        if (results.length > 0) {
            return (
                results.map((item) => {
                    return (
                        <div className="projects-card-item">
                            <div className={'div-thumb-overlay'}>
                                <div className={'overlay-item-container'}>
                                    <div className={'overlay-project-div'}>
                                        <p className={'project-title'}>{item.title}</p>
                                        <div className={'project-readmore-container'}>
                                            <span className={'project-readmore-text'}>Read More</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src={item.thumbnail} className={'projects-thumb-img'} />
                        </div>
                    )
                })
            )
        }
    }

    render() {
        var results = JSON.parse(JSON.stringify(this.props.projects)).data;
        //console.log('Projects '+JSON.stringify(this.props.projects)+" == "+JSON.stringify(results));
        return (
            <div className={'projects-parent-container'}>
                <div className={'project-child-container'}>
                    <div className={'projects-tab-container'}>
                        {this.state.tabItem.map(data =>
                            <div className={'tab-container'} onClick={this.setSelectedTab.bind(this, data)}>
                                <span className={this.state.selectedItem === data ? 'tab-selected-label' : 'tab-label'}>{data}</span>
                                <div className={this.state.selectedItem === data ? 'tab-selected' : 'tab-unselected'}></div>
                            </div>
                        )}
                    </div>
                    <div className="projects-items-container">
                        {this.renderProjects(results)}
                    </div>
                </div>
                <div className={'blank-gap-div'}></div>
            </div>
        );
    }
}

const stateProps = state => ({
    projects: state.projects
});

const dispatchProps = dispatch => ({
    fetchProjects: () => dispatch(fetchProjects()),
});

export default connect(stateProps, dispatchProps)(ProjectsComponent);