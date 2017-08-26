import * as types from '../constants/ActionTypes';
import { dispatchable, handle403, serverUrl } from './';
import axios from 'axios';


export const getParticipants = participants => dispatch => {

  dispatch(dispatchable(
    types.FETHCING_PARTICIPANTS, null
  ));

  axios.get(serverUrl + '/participants', { withCredentials: true }).then( response => {
    if (response.data) {

      const participants = response.data.sort( (a,b ) => a.firstName.localeCompare(b.firstName));

      dispatch(dispatchable(
        types.GET_PARTICIPANTS, participants
      ));
    }
  }).catch( err => {
    handle403(err);
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
    handle403(err);
  });
};

export const getAgentsCaught = () => dispatch => {
  axios.get(serverUrl + '/agents', { withCredentials: true }).then( response => {
    if (response.data) {

      const agents = response.data.sort((a,b) => new Date(b.added) - new Date(a.added));

      dispatch(dispatchable(
        types.GET_CAUGHT_AGENTS, agents
      ));
    }
  }).catch( err => {
    handle403(err);
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
        const agents = response.data.sort((a,b) => new Date(b.added) - new Date(a.added));
        dispatch(dispatchable(
          types.GET_CAUGHT_AGENTS, agents
        ));
        dispatch(dispatchable(
          types.AGENT_CODE_MESSAGE, "Agent lagt til!"
        ));
      }
    }).catch( err => {
      if (err.response) {
        if (err.response.status == 404) {
          dispatch(dispatchable(
            types.AGENT_CODE_MESSAGE, "Ugyldig agentnavn!"
          ));
        }

        handle403(err);
      }
    });
  } else {
    dispatch(dispatchable(
      types.AGENT_CODE_MESSAGE, "Denne agenten finnes fra før!"
    ));
  }

};