import { ConnectType } from './types';

export enum ActionType {
  CONNECTION_REQUEST = 'CONNECTION_REQUEST',
  CONNECTION_SUCCESS = 'CONNECTION_SUCCESS',
  CONNECTION_FAILED = 'CONNECTION_FAILED',
  UPDATE_ACCOUNT = 'UPDATE_ACCOUNT',
}

interface connectionTry {
  type: ActionType.CONNECTION_REQUEST;
}

interface connectionSuccess {
  type: ActionType.CONNECTION_SUCCESS;
  payload: ConnectType;
}

interface connectionFail {
  type: ActionType.CONNECTION_FAILED;
  payload: string;
}

interface connectionUpdate {
  type: ActionType.UPDATE_ACCOUNT;
  payload: string;
}

export type Action = connectionTry | connectionSuccess | connectionFail | connectionUpdate;
