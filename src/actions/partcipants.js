import * as types from '../constants/ActionTypes';
import { dispatchable } from './';
import axios from 'axios';
const serverUrl = 'http://localhost:8989';


export const getParticipants = participants => dispatch => {
  axios.get(serverUrl + '/participants', { withCredentials: true }).then( response => {
    if (response.data) {
      dispatch(dispatchable(
        types.GET_PARTICIPANTS, response.data
      ));
    }
  }).catch( err => {
    console.log(err);
  });
}

export const getHighscore = () => dispatch => {
  axios.get(serverUrl + '/highscore', { withCredentials: true }).then( response => {
    if (response.data) {
      dispatch(dispatchable(
        types.GET_HIGHSCORE, response.data
      ));
    }
  }).catch( err => {
    console.log(err);
  });
};

export const getAgentsCaught = () => dispatch => {
  axios.get(serverUrl + '/agents', { withCredentials: true }).then( response => {
    if (response.data) {
      dispatch(dispatchable(
        types.GET_CAUGHT_AGENTS, response.data
      ));
    }
  }).catch( err => {
    console.log(err);
  });
};

export const addAgent = agentName => (dispatch, getState) => {

  const state = getState();

  const agents = state.participants.agents.data;

  const alreadyAdded = state.participants.agents.data.some( agent => {
    return agent.agentName.toLowerCase() === agentName.toLowerCase();
  });

  if (!alreadyAdded) {
    axios.post(serverUrl + '/agents', { agentName }, { withCredentials: true }).then( response => {
      if (response.data) {
        dispatch(dispatchable(
          types.GET_CAUGHT_AGENTS, response.data
        ));
      }
    }).catch( err => {
      if (err.response) {
        if (err.response.status == 404) {
          dispatch(dispatchable(
            types.INVALID_AGENT_CODE, "Ugyldig agentnavn!"
          ));
        }
      }
    });
  } else {
    dispatch(dispatchable(
      types.INVALID_AGENT_CODE, "Denne agenten finnes fra før!"
    ));
  }

};