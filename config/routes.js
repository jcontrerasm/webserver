export const routes = (app) => {
  app.get('/', (req, res) => {
    res.render('home', {
      page: 'Home'
    });
  });

  app.get('/contacto', (req, res) => {
    res.render('contact', {
      page: 'Contacto'
    });
  });

  app.get('*', (req, res) => {
    res.render('contact', {
      page: 'Contacto'
    });
  });
}
