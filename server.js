const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const nextI18NextMiddleware = require('next-i18next/middleware')
const nextI18next = require('./i18n')
const handle = app.getRequestHandler();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

app.prepare()
  .then(() => {
    const server = express();
    
    server.use(nextI18NextMiddleware(nextI18next))

    server.get('/favicon.ico', (req, res) => (
      res.status(200).sendFile('favicon.ico', { root: __dirname + '/static/' })
    ));

    server.get('/national/:year', (req, res) => {
      const actualPage = '/national'
      let year = req.params.year
      const queryParams = { year: year }
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/regional/:year', (req, res) => {
      const actualPage = '/regional'
      let year = req.params.year
      const queryParams = { year: year }
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/destination/:year/:from/:groupby', (req, res) => {
      const actualPage = '/destination'
      const queryParams = {
        year: req.params.year,
        from: req.params.from, groupBy: req.params.groupby,
        limit: req.query.limit, limitareas: req.query.limitareas
      }
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/international/:year', (req, res) => {
      const actualPage = '/international'
      const queryParams = { year: req.params.year }
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/divers/:year', (req, res) => {
      const actualPage = '/divers'
      const queryParams = { year: req.params.year }
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });


    server.listen(8000, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:8000');
    });
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  });