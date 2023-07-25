import Web3 from 'web3';
import { ActionType } from '../actionTypes';
import { ConnectType } from '../types';

export const connectRequest = () => {
  return { type: ActionType.CONNECTION_REQUEST };
};

export const connectSuccess = (payload: ConnectType) => {
  return {
    type: ActionType.CONNECTION_SUCCESS,
    payload: payload,
  };
};

export const connectFailed = (payload: string) => {
  return {
    type: ActionType.CONNECTION_FAILED,
    payload: payload,
  };
};

export const updateAccountRequest = (payload: string) => {
  return {
    type: ActionType.UPDATE_ACCOUNT,
    payload: payload,
  };
};

declare let window: any;

export const connect = () => {
  return async (dispatch: any) => {
    dispatch(connectRequest());
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });

        const networkId = await window.ethereum.request({
          method: 'net_version',
        });

        if (networkId === process.env.REACT_APP_CHAINID) {
          dispatch(
            connectSuccess({
              account: accounts[0],
              web3: web3,
            }),
          );
          // Add listeners start
          window.ethereum.on('accountsChanged', (foundAccounts: string[]) => {
            dispatch(updateAccount(foundAccounts[0]));
          });
          window.ethereum.on('chainChanged', () => {
            window.location.reload();
          });
          // Add listeners end
        } else {
          dispatch(connectFailed('Change network to ETH.'));
        }
      } catch (err) {
        dispatch(connectFailed('Something went wrong.'));
      }
    } else {
      dispatch(connectFailed('Install Metamask.'));
    }
  };
};

export const updateAccount = (account: string) => {
  return async (dispatch: any) => {
    dispatch(updateAccountRequest(account));
  };
};
