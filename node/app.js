const { leapyear } = require('../pkg/leap_year.js');

const http = require('http');
const url = require('url');
const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url,true).query;
  if (!queryObject['year']) {
    res.end(`Please use command curl http://${hostname}:${port}/?year=aYear \n`);
  } else {
    res.end(leapyear(queryObject['year']) + '\n');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
