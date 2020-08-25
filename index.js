

const fetch = require('node-fetch');

const webhookURL = process.argv[3];
const data = JSON.stringify({
  'text': process.argv[2],
});
for (let j = 0; j < process.argv.length; j++) {
  console.log(j + ' -> ' + (process.argv[j]));
}
fetch(webhookURL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
  body: data,
}).then((response) => {
  console.log(response);
});
