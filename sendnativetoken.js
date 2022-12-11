import { LCDClient, MnemonicKey, MsgSend } from '@terra-money/feather.js';

// const lcd = new LCDClient(...);

const mk = new MnemonicKey({
  mnemonic:
    'satisfy adjust timber high purchase tuition stool faith fine install that you unaware feed domain license impose boss human eager hat rent enjoy dawn',
});

const wallet = lcd.wallet(mk);

// Transfer 1 Luna.
const send = new MsgSend(
  wallet.key.accAddress('terra'), // requires prefix as a parameter
  'terra1dcegyrekltswvyy0xy69ydgxn9x8x32zdtapd8',
  { uluna: '1000000' },
);

const tx = await wallet.createAndSignTx({ msgs: [send], chainID: 'pisco-1' });
const result = await lcd.tx.broadcast(tx, 'pisco-1');

console.log(result);
