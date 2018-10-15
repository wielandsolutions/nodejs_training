const request = require('request');

request({
    url: 'http://www.mapquestapi.com/geocoding/v1/address?key=DC4gmaRae45nS8kzih0sVUEobABrOTNL&location=1301%20lombard%20street%20philadelphia',
    JSON: true
}, (error , response , body) =>{
console.log(JSON.parse(body));
});