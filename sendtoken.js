import {
    MsgExecuteContract,
    MnemonicKey,
    Coins,
    LCDClient,
  } from '@terra-money/feather.js';
  
  // const lcd = new LCDClient(...);
  
  const mk = new MnemonicKey({
    mnemonic:
      'satisfy adjust timber high purchase tuition stool faith fine install that you unaware feed domain license impose boss human eager hat rent enjoy dawn',
  });
  
  const wallet = lcd.wallet(mk);
  
  // LUNA <> OTHER_TOKEN
  const pool = '<INSERT_TOKEN_POOL_ADDRESS>';
  
  // Fetch the number of each asset in the pool.
  const { assets } = await lcd.wasm.contractQuery(pool, { pool: {} });
  
  // Calculate belief price using pool balances.
  const beliefPrice = (assets[0].amount / assets[1].amount).toFixed(18);
  
  // Swap 1 LUNA with 1% slippage tolerance.
  const terraSwap = new MsgExecuteContract(
    wallet.key.accAddress,
    pool,
    {
      swap: {
        max_spread: '0.01',
        offer_asset: {
          info: {
            native_token: {
              denom: 'uluna',
            },
          },
          amount: '1000000',
        },
        belief_price: beliefPrice,
      },
    },
    new Coins({ uluna: '1000000' }),
  );
  
  const tx = await wallet.createAndSignTx({
    msgs: [terraSwap],
    chainID: 'pisco-1',
  });
  const result = await lcd.tx.broadcast(tx, 'pisco-1');
  
  console.log(result);
  