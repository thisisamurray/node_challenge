
// All tasks will be using the Coinbase and Airtable API, leveraging their Node libraries for connections.

// Airtable Invite - https://airtable.com/invite/r/2PMFSm8b

// Airtable Node Library - https://github.com/airtable/airtable.js
// Airtable API Docs - https://airtable.com/<TABLE_ID>/api/docs#curl/introduction

// Coinbase Node Library - https://github.com/coinbase/coinbase-pro-node
// Coinbase API Docs - https://docs.pro.coinbase.com/#market-data

// Task 1 - Update the "Ticker" table to track the following product IDs and updates their Price, Bid, and ASK values every 30 seconds.
const p_ids = {
  "Etherium": {
    "code": "ETH-USD"
  },
  "Bitcoin": {
    "code": "BTC-USD"
  },
  "Lite Coin": {
    "code": "LTC-USD"
  },
  "EOS": {
    "code": "EOS-USD"
  },
  "Etherium Classic": {
    "code": "ETC-USD"
  }
};

console.log("Starting...");

// Task 2 - Update the same table as Task 1, but also set Trending to either UP or DOWN depending if the current price is higher or lower or equal to the starting price of the day
