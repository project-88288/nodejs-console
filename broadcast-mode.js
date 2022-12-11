// sign the tx
wallet
  .createAndSignTx(TX_HERE, CHAIN_ID_HERE)
  // use broadcastSync() instead of broadcast()
  .then((tx) => terra.tx.broadcastSync(tx, chainID))
  .then(async (result) => {
    // TODO: use a for or add a timeout to prevent infinite loops
    while (true) {
      // query txhash
      const data = await terra.tx.txInfo(result.txhash).catch(() => {});
      // if hash is onchain return data
      if (data) return data;
      // else wait 250ms and then repeat
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
  })
  .then((result) => {
    // this will be executed when the tx has been included into a block
    console.log(result);
  });
