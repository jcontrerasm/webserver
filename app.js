import express from 'express';
import { enviroment } from './config/enviroment';
import { helpers } from './config/helpers';
import { routes } from './config/routes';

const app = express();
const port = process.env.PORT || 3000;

enviroment(app, express);
helpers(app);
routes(app);

app.listen(port, () => console.log(
  `Node.js server is listening at http://localhost:${port}/`
));