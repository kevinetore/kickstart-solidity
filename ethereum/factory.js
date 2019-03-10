import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x38D140e3DD744c22700c15eA70B55a9Feb20583e'
);

export default instance;
