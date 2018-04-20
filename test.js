const test = require('tape');
const params = require('./');
// TODO: add actual key for leofcoin (main)net
const swarmKey = `/key/swarm/psk/1.0.0/
/base16/
54854aedc14d3674b70796d21c4d0ed439938d65c9d3002eee00603c7c4be7cd
`;
test('Params are created for mainnet', tape => {
  tape.plan(4)
  const result = params('leofcoin');
  tape.equal(swarmKey, result.key);
  tape.deepEqual([], result.checkpoints);
  tape.equal(150, result.reward);
  tape.ok(result.localDAGMultiaddress.length === 46);
});

test('Params are created for testnet', tape => {
  tape.plan(4)
  const result = params('olivia');
  tape.equal(swarmKey, result.key);
  tape.deepEqual([], result.checkpoints);
  tape.equal(150, result.reward);
  tape.ok(result.localDAGMultiaddress.length === 46);
});
