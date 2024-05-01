const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  // res.end(document.write("haseeb"));
  res.end(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>css 1</title>
      <link rel="stylesheet" href="haseeb2.css" />
      <link rel="icon" href="golra.jpg" />
    </head>
    <body>
      <header >haseeb</header>
      
      <p id="one" class="a" >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nihil
        voluptas nesciunt nostrum iusto aliquam sit, et quibusdam quis vero earum
        possimus officiis illum tempora corrupti error eveniet ea est.
      </p>
      <p id="two" class="a">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
        dolorem illum facere, distinctio perferendis est debitis dolore ullam,
        earum deserunt recusandae. Quam aliquid totam quae unde labore in ad
        ducimus!
      </p>
      <p id="three" class="a">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
        repellendus eligendi nostrum ea, unde dolore numquam accusantium
        perspiciatis voluptates illo eum tempora officiis iure odit ut vel
        assumenda? Voluptatem, assumenda.
      </p>
      <p id="four" class="a">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
        sapiente eos quia ipsam id ea ex amet, vitae similique, animi possimus
        neque dolore perferendis! Provident eveniet doloribus culpa natus nostrum.
      </p>
      <footer>HAseeb</footer>
    </body>
  </html>
  `);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});