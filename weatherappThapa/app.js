const fs = require('fs');
const http = require('http');
var requests = require('requests');

const homeFile = fs.readFileSync('home.html', 'utf-8');

const replaceVal = (tempVal, orgVal) => {
  let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
  temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);
  temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
  temperature = temperature.replace("{%location%}", orgVal.name);
  temperature = temperature.replace("{%country%}", orgVal.sys.country);
  temperature = temperature.replace("{%tempStatus%}", orgVal.weather[0].main);
  return temperature;
}

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    requests('https://api.openweathermap.org/data/2.5/weather?q=Delhi&units=metric&appid=66a0bff374dee02705467ab0b953645d')
      .on('data', (chunk) => {
        const objdata = JSON.parse(chunk);
        const arrData = [objdata];
        // console.log(objdata.main);

        const realTimeData = arrData.map(val => replaceVal(homeFile, val)).join('');
        res.write(realTimeData);
        // console.log(realTimeData);
        // console.log(arrData[0].main.temp)
      })
      .on('end', (err) => {
        if (err) return console.log('connection closed due to errors', err);
        res.end('');
      });
  }
  else {
  res.end('Page not found');
}
});

server.listen(8000, '127.0.0.1')


// else {
//   res.end('file not found');
// }
