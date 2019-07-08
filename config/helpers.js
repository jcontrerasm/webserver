export const helpers = (app) => {
  app.use((req, res, next) => {
    res.locals.year = new Date().getFullYear();
    next();
  });
}
