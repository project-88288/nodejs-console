import { AccAddress } from '@terra-money/feather.js';
// validate length, prefix and bech32 checksum. The second parameter is the expected bech32 prefix
AccAddress.validate('terra1x46rqay4d3cssq8gxxvqz8xt6nwlz4td20k38v', 'terra'); // true

// to check just length and bech32 checksum (if don't know the chain)
AccAddress.validate('terra1x46rqay4d3cssq8gxxvqz8xt6nwlz4td20k38v'); // true

// Get the prefix of an address. It will trow an error if the address is invalid
AccAddress.getPrefix('terra1x46rqay4d3cssq8gxxvqz8xt6nwlz4td20k38v'); // 'terra'
