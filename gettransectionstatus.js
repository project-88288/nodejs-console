// Replace with TX hash to lookup.
const hash = 'CAB264B3D92FF3DFE209DADE791A866876DE5DD2A320C1200F9C5EC5F0E7B14B';
const txInfo = await lcd.tx.txInfo(hash, 'pisco-1'); // specify chainID to direct LCD to the correct chain
console.log(txInfo);
