import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0xbB0743636861b920265b3b8154242e6FA32a4Ea8'
);

export default instance;
