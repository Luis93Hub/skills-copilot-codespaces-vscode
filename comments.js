// Create web server application
// 1. Create a web server application that can listen to client requests
// 2. Respond with a static HTML file
// 3. Respond with a static CSS file
// 4. Respond with a static JS file
// 5. Respond with a static image file
// 6. Respond with a static JSON file
// 7. Respond with a dynamic HTML file
// 8. Respond with a dynamic JSON file
// 9. Create a form that can accept user input
// 10. Create a form that can accept user input and save it to a file

const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// 1. Create a web server application that can listen to client requests
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// 2. Respond with a static HTML file
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

// 3. Respond with a static CSS file
app.get('/style.css', (req, res) => res.sendFile(__dirname + '/style.css'));

// 4. Respond with a static JS file
app.get('/script.js', (req, res) => res.sendFile(__dirname + '/script.js'));

// 5. Respond with a static image file
app.get('/image.png', (req, res) => res.sendFile(__dirname + '/image.png'));

// 6. Respond with a static JSON file
app.get('/data.json', (req, res) => res.sendFile(__dirname + '/data.json'));

// 7. Respond with a dynamic HTML file
app.get('/dynamic', (req, res) => {
  const data = fs.readFileSync('./data.json', 'utf8');
  const parsedData = JSON.parse(data);

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>Document</title>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <h1>${parsedData.name}</h1>
      <img src="/image.png" alt="image">
      <script src="/script.js"></script>
    </body>
    </html>
  `;

  res.send(html);
});

// 8. Respond with a dynamic JSON...