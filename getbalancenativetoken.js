// The LCD will direct the query according to the bech32 prefix of the address
const [terraBalance] = await lcd.bank.balance(
    'terra1x46rqay4d3cssq8gxxvqz8xt6nwlz4td20k38v',
  );
  console.log(terraBalance);
  
  const [osmoBalance] = await lcd.bank.balance(
    'osmo1x46rqay4d3cssq8gxxvqz8xt6nwlz4td20k38v',
  );
  console.log(osmoBalance);
  