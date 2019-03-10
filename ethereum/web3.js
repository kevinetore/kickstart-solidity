import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // In browser with Metamask installed
  web3 = new Web3(window.web3.currentProvider);
} else {
  // On server or Metamask is not installed
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/12879d80b72441c19c14b073ce1b9ef5'
  );

  web3 = new Web3(provider);
}

export default web3;
