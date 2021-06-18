[![Build Status](https://travis-ci.org/tronalddump-io/client-nodejs.svg?branch=master)](https://travis-ci.org/tronalddump-io/client-nodejs)

# Official tronalddump.io api client for node.js

[Tronalddump.io](https://www.tronalddump.io) is a free api and web archive for the dumbest things Donald Trump has ever said ...

## Installation

`npm install tronalddump-io`

## Usage

```javascript
const Tronald = require('tronalddump-io'),
      client = new Tronald();

// Retrieve a Tronald quote by its id
client.getQuote('wAgIgzV1S9OARKhfun3f0A').then((res) => {
    // to stuff here
}).catch((err) => {
    // handle error
});

// Perform a free text search
client.search('money').then((res) => {
    // to stuff here
}).catch((err) => {
    // handle error
});
```

## License

This distribution is covered by the **GNU GENERAL PUBLIC LICENSE**, Version 3, 29 June 2007.

## Support & Contact

Having trouble with this repository? Check out the documentation at the repository's site or contact m@matchilling.com and we’ll help you sort it out.

Happy Coding

:v:
