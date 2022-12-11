import { LCDClient } from '@terra-money/feather.js';

const lcd = new LCDClient({
  // key must be the chainID
  'pisco-1': {
    lcd: 'https://pisco-lcd.terra.dev',
    chainID: 'pisco-1',
    gasAdjustment: 1.75,
    gasPrices: { uluna: 0.015 },
    prefix: 'terra', // bech32 prefix, used by the LCD to understand which is the right chain to query
  },
});

import { MnemonicKey } from '@terra-money/feather.js';
const mk = new MnemonicKey({
  mnemonic: '//Input your 24-word mnemonic key here//',
});
const wallet = lcd.wallet(mk);

import {
    MsgSend,
    MnemonicKey,
    Coins,
    LCDClient,
  } from '@terra-money/feather.js';
  
  const lcd = new LCDClient({
    'pisco-1': {
      chainID: 'pisco-1',
      lcd: 'https://pisco-lcd.terra.dev',
      gasAdjustment: 1.75,
      gasPrices: {
        uluna: 0.015,
      },
      prefix: 'terra', // bech32 prefix, used by the LCD to understand which is the right chain to query
    },
  });

  const lcd2 = new LCDClient({
    'osmosis-1': {
      chainID: 'osmosis-1',
      lcd: 'https://lcd.osmosis.zone',
      gasAdjustment: 1.75,
      gasPrices: {
        uosmo: 0.025,
      },
      prefix: 'osmo',
    },
    'phoenix-1': {
      chainID: 'phoenix-1',
      lcd: 'https://phoenix-lcd.terra.dev',
      gasAdjustment: 1.75,
      gasPrices: {
        uluna: 0.015,
      },
      prefix: 'terra',
    },
  });
  
  const lcd4 = LCDClient.fromDefaultConfig('testnet'); // connect to testnet
const lcd3 = LCDClient.fromDefaultConfig('mainnet'); // connect to mainnet

// The LCD will direct the query according to the bech32 prefix of the address
const [terraBalance] = await lcd.bank.balance(
    'terra1x46rqay4d3cssq8gxxvqz8xt6nwlz4td20k38v',
  );
  console.log(terraBalance);
  
  const [osmoBalance] = await lcd.bank.balance(
    'osmo1x46rqay4d3cssq8gxxvqz8xt6nwlz4td20k38v',
  );
  console.log(osmoBalance);
  

  
