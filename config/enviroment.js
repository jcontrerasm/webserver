import path from 'path';

export const enviroment = (app, express) => {
  app.use(express.static(path.join(__dirname, '../public')));
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'pug');
}
