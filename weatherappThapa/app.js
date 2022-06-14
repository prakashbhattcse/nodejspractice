const fs = require('fs');
const http = require('http');

const homeFile =fs.readFileSync('home.html', 'utf-8');

const server =http.createServer((req , res)=>{
    
})