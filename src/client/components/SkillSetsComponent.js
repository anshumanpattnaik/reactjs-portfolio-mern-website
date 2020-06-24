import React from 'react';
import "../css/index.css";

import { connect } from 'react-redux';

import { fetchSkillSets } from '../actions';

class SkillSetsComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchSkillSets();
    }

    renderTechSkills = (items) => {
        return (
            items.map(data =>
                <div key={data} className={'skills-item-container'}>
                    <span className={'skills-item-text'}>{data}</span>
                </div>
            )
        );
    }

    renderTechStacks = (results) => {
        if (results.length > 0) {
            return (
                results.map(item =>
                    <div key={item} className={'skills-sets-container'}>
                        <div className={'skills-label-container'}>
                            <span className={'skills-label'}>{item.label}</span>
                        </div>
                        <div className={'skills-separator-container'}>
                            <div className={'skills-separator-line'}></div>
                            <div className={'skills-separator-circle'}>
                                <div className={'skills-separator-inner-circle'}></div>
                            </div>
                        </div>
                        <div className={'skills-items-container'}>
                            {this.renderTechSkills(item.skills)}
                        </div>
                    </div>
                )
            );
        }
    }

    render() {
        var results = JSON.parse(JSON.stringify(this.props.skills)).data;
        return (
            <div className={'skills-parent-container'}>
                {this.renderTechStacks(results)}
                <div className={'skills-mobile-gap'}></div>
            </div>
        );
    }
}

const stateProps = state => ({
    skills: state.skills
});

const dispatchProps = dispatch => ({
    fetchSkillSets: () => dispatch(fetchSkillSets()),
});

export default connect(stateProps, dispatchProps)(SkillSetsComponent);