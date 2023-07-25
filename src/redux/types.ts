import Web3 from 'web3';

export interface ConnectType {
  account: string;
  web3: Web3;
}

export interface RootState {
  loading: boolean;
  account: string;
  web3: null | Web3;
  errorMsg: string;
}
