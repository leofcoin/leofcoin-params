import { readFileSync } from 'fs';
import { join } from 'path';
import { homedir } from 'os';
import paths from './paths';

const _dataPath = join(homedir(), 'AppData', 'Roaming', 'Leofcoin');

const networks = {
	'leofcoin': join(homedir(), '.leofcoin'),
	'olivia': join(homedir(), '.leofcoin/olivia')
};

// TODO: add actual key for leofcoin (main)net
const swarmKey = network => {
  if (network === 'olivia' || network === 'leofcoin') return `/key/swarm/psk/1.0.0/
/base16/
54854aedc14d3674b70796d21c4d0ed439938d65c9d3002eee00603c7c4be7cd
`;
else if (network === 'leofcoin') return ``;
else console.warn(`No swarmKey found for ${network}`);
}

const localDAGMultiaddress = localDAGAddress => {
  try {
    const address = readFileSync(localDAGAddress, 'utf8');
    return address;
  } catch (e) {
    console.warn(`initial run::${e}`)
  }
}

export default (network = 'olivia', dataPath = _dataPath) => {
  if (network === 'testnet') network = 'olivia';
  else if (network === 'main') network = 'leofcoin';
  else if (network !== 'leofcoin' && network !== 'olivia') throw new Error(`${network} not implemented`);
  const networkPath = networks[network];
  const configPaths = paths(networkPath, dataPath);
  return {
    paths: configPaths,
    key: swarmKey(network),
    reward: 150,
    checkpoints: [],
    localDAGMultiaddress: localDAGMultiaddress(configPaths.localDAGAddress)
  }
}
