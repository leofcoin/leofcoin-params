import { join } from 'path';
import { homedir } from 'os';

export default (path, dataPath) => {
  return {
    configPath: join(dataPath, 'core.config'),
    netKeyPath: join(path, 'swarm.key'),
    localCurrent: join(path, 'db', 'current'),
    localIndex: join(path, 'db', 'index'),
    localDAGAddress: join(path, 'db', 'dag.multiaddress')
  }
}
