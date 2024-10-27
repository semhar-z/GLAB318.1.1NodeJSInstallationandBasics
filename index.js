const http = require('http');

const hostname = '127.0.0.1';

const port = 3000;

// const server = http.createServer((req, res) => {
//       res.statusCode = 200;
//       res.setHeader('Content-Type', 'text/plain');
//       res.end('Hello World!\n');
//     });

// const server = http.createServer((req, res) => {
//      res.statusCode = 200;
//      res.setHeader('Content-Type', 'text/html');
//      res.write('<h1 style="color: red">Hello World!</h1>');
//      res.write('<p>I wonder what else we can send...</p>');
//      res.end();
// });

const routes = {
    "/": "<h1 style='color:red'>Hello World!</h1><p style='color: blue'>Welcome to the default route!</p>",
    "/about": "<h1 style='color: green'>About Us</h1><p  style='color: gray'>Hi how are you!</p>",
    "/contact": "<h1 style='color: purple'>Contact Us</h1><p style='color: orange'>We did it!</p>",
  };
  
  
const server =  http.createServer((req, res) => {
      const response = routes[req.url];
  
      if (response) {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(response);
      } else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>");
      }
      res.end();
    })
server.listen(port, hostname, () => {
       console.log(`Server running at http://${hostname}:${port}/`);
    });