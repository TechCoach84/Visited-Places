import Web3 from 'web3';

type ConnectType = {
  account: string;
  web3: Web3;
};

type RootState = {
  loading: boolean;
  account: string;
  web3: null | Web3;
  errorMsg: string;
};
