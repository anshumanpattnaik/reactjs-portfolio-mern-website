import {
    BASE_URL, 
    SKILLS_ENDPOINT,
    PROJECTS_ENDPOINT,
    FETCH_SKILLS_SETS,
    FETCH_PROJECTS
} from './constants';

export const dispatchSkillSets = data => ({
    type: FETCH_SKILLS_SETS,
    payload: data
});

export const dispatchProjects = data => ({
    type: FETCH_PROJECTS,
    payload: data
});

export const fetchSkillSets = () => dispatch => {
    fetch(BASE_URL+SKILLS_ENDPOINT)
    .then(response =>  response.json())
    .then(data => {
       dispatch(dispatchSkillSets(data));
    })
}

export const fetchProjects = () => dispatch => {
    fetch(BASE_URL+PROJECTS_ENDPOINT)
    .then(response =>  response.json())
    .then(data => {
       dispatch(dispatchProjects(data));
    })
}