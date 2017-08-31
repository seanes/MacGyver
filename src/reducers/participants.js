import * as types from '../constants/ActionTypes';

const initialState = {
  data: [],
  isLoading: false,
  letters: [],
  active: [],
  letters: [],
  filteredLetters: [],
  filteredParticipants: [],
  agents: {
    data: [],
    message: null,
    myAgentName: '',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {

    case types.CLICK_PROFILE_TAG:
      const newFilteredParticipants = getFilteredParticipants(state.data, [action.payLoad]);
      return Object.assign({}, state, {
        active: [action.payLoad],
        filteredParticipants: newFilteredParticipants,
        filteredLetters: getLettersFromParticipants(newFilteredParticipants)
      });

    case types.CLEAR_USER_FROM_STATE:
      return Object.assign({}, state, {
        active: [],
        filteredParticipants: state.participants.slice(),
        filteredLetters: state.letters,
        agents: {
          data: [],
          message: null,
          myAgentName: '',
        },
      });

    case types.REMOVE_ALL_FILTERS:
      const newLetters = getLettersFromParticipants(state.data);
      return Object.assign({}, state, {
        active: [],
        letters: newLetters,
        filteredLetters: newLetters,
        filteredParticipants: state.data.slice(),
      });

    case types.CLICK_TAG:
      const isAdded = state.active.indexOf(action.payLoad) > -1;
      let newActive = [];

      if (!isAdded) {
        newActive = state.active.concat(action.payLoad);
      } else {
        newActive = state.active.filter(tag => tag !== action.payLoad);
      }

      const filteredParticipants = getFilteredParticipants(state.data, newActive);

      return Object.assign({}, state, {
        active: newActive,
        filteredParticipants,
        filteredLetters: getLettersFromParticipants(filteredParticipants)
      });

    case types.GET_PARTICIPANTS:

      const participants = action.payLoad;
      const preFilteredParticipants = getFilteredParticipants(action.payLoad, state.active);

      return Object.assign({}, state, {
        data: action.payLoad,
        isLoading: false,
        letters: getLettersFromParticipants(participants),
        filteredLetters: getLettersFromParticipants(participants),
        filteredParticipants: preFilteredParticipants,
      });

    case types.FETHCING_PARTICIPANTS:
      return Object.assign({}, state, {
        isLoading: true,
      });

    case types.GET_CAUGHT_AGENTS:
      return Object.assign({}, state, {
        agents: {
          data: action.payLoad.agents,
          myAgentName: action.payLoad.myAgentName,
          error: null
        }
      });

    case types.AGENT_CODE_MESSAGE:
      return Object.assign({}, state, {
        agents: {
          ...state.agents,
          message: action.payLoad
        }
      });

    default:
      return state;
  }
}

const getLettersFromParticipants = (participants = []) => {
  const capitaLetter = [];
  if (participants) {
    participants.forEach(p => {
      let letter = p.firstName[0];
      if (capitaLetter.indexOf(letter) === -1) {
        capitaLetter.push(letter);
      }
    });
  }
  return capitaLetter.sort((a, b) => a.localeCompare(b, 'nb'));
};

const getFilteredParticipants = (participants, activeTags) => {
  if (participants && participants.length) {
    return participants.filter(p => {
      let allTagsAreFound = true;
      activeTags.forEach(tag => {
        if (p.tags.indexOf(tag) === -1) allTagsAreFound = false;
      });
      return allTagsAreFound;
    });
  }
  return [];
}