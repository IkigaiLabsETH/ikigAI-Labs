// https://dune.com/docs/api/quick-start/api-js/#example-dune-api-script-for-a-parameterized-query
// https://dune.com/livethelife

import { Headers } from 'node-fetch';
import fetch from 'node-fetch';

// Add the API key to an header object
const meta = {
    "x-dune-api-key": "YOUR_API_KEY"
};
const header = new Headers(meta);

// Add parameters we would pass to the query
var params = { "query_parameters" : { "wallet_address": "0xb10f35351ff21bb81dc02d4fd901ac5ae34e8dc4" }};
var body = JSON.stringify(params);

//  Call the Dune API
const response = await fetch('https://api.dune.com/api/v1/query/638435/execute', {
    method: 'POST',
    headers: header,
    body: body // This is where we pass the parameters
});
const response_object = await response.text();

// Log the returned response
console.log(response_object);
