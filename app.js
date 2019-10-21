// import express from 'express';
// import { argv } from 'optimist';
// import { enviroment } from './config/enviroment';
// import { helpers } from './config/helpers';
// import { routes } from './config/routes';

// const app = express();
// const port = process.env.PORT || argv.port || 3000;

// enviroment(app, express);
// helpers(app);
// routes(app);

// app.listen(port, () => console.log(
//   `Node.js server is listening at http://localhost:${port}/`
// ));
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './public')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('home', {
    page: 'Home'
  });
});

app.get('/entregar-reporte', (req, res) => {
  console.log('entrega de reportes...');
  res.render('contact', {
    page: 'Contacto'
  });
});

app.listen(port, () => console.log(
  `Node.js server is listening at http://localhost:${port}/`
));
