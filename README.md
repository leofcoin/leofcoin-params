# leofcoin-params
> Leofcoin blockchain & core app parameters

```js
import { block as newBlock, validate } from 'leofcoin-block';

// create a block
const block = newBlock(0, 'parent', [transactions], 'address');
// mine the hash
// block.hash = keccak(block, 256);
const block2 = newBlock(block.index + 1, block.hash, [transactions], 'address');

validate(block, block2, difficulty, unspent)
```
