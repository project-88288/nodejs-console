import { LCDClient, Tx } from '@terra-money/feather.js';

// const lcd = new LCDClient(...);

const blockData = await lcd.tendermint.blockInfo(5923213);

const txInfos = blockData.block.data.txs.map((tx) =>
  Tx.unpackAny({ value: Buffer.from(tx, 'base64') }),
);

// Find messages where a contract was initialized.
const initMessages = txInfos
  .map((tx) => tx.body.messages)
  .flat()
  .find((i) => i.constructor.name === 'MsgInstantiateContract');

console.log(initMessages);
