import { Action, ActionType } from '../actionTypes';
import { RootState } from '../types';

const initialState = {
  loading: false,
  account: '',
  web3: null,
  errorMsg: '',
};

const reducers = (state: RootState = initialState, action: Action): RootState => {
  switch (action.type) {
    case ActionType.CONNECTION_REQUEST:
      return {
        ...state,
        loading: true,
        errorMsg: '',
      };

    case ActionType.CONNECTION_SUCCESS:
      return {
        ...state,
        loading: false,
        account: action.payload.account,
        web3: action.payload.web3,
      };

    case ActionType.CONNECTION_FAILED:
      return {
        ...state,
        loading: false,
        errorMsg: action.payload,
      };

    case ActionType.UPDATE_ACCOUNT:
      return {
        ...state,
        account: action.payload,
      };

    default:
      return state;
  }
};

export default reducers;
