// Check balance of token on pisco-1 using tokenAddress.
const tokenAddress = '<INSERT_TOKEN_ADDRESS>';
const walletAddress = 'terra1f44ddca9awepv2rnudztguq5rmrran2m20zzd6';
const response = await lcd.wasm.contractQuery(tokenAddress, {
  balance: { address: walletAddress },
});

console.log(response);
