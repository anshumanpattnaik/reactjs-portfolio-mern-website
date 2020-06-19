import {
    BASE_URL, 
    SKILLS_ENDPOINT,
    FETCH_SKILLS_SETS
} from './constants';

export const dispatchSkillSets = data => ({
    type: FETCH_SKILLS_SETS,
    payload: data
});

export const fetchSkillSets = () => dispatch => {
    fetch(BASE_URL+SKILLS_ENDPOINT)
    .then(response =>  response.json())
    .then(data => {
       dispatch(dispatchSkillSets(data));
    })
}