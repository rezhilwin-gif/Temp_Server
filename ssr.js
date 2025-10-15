// // server.js
// const express = require('express');
// const React = require('react');
// const { renderToString } = require('react-dom/server');
// const App = require('./components/App');
// const app = express();
// // Route to render the App component
// app.get('/', (req, res) => {
//     // Render the React component to an HTML string
//     const appHtml = renderToString(React.createElement(App));
//     // Send the HTML response
//     res.send(`
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <title>Simple SSR Example</title>
//     </head>
//     <body>
//       <div id="root">${appHtml}</div>
//     </body>
//     </html>
//   `);
// });
// // Start the server
// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

