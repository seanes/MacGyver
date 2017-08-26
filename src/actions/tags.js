import * as types from '../constants/ActionTypes';
import { dispatchable, } from './';

export const clickTag = tagName => dispatch => {
  dispatch(dispatchable(
    types.CLICK_TAG,
    tagName
  ));
};