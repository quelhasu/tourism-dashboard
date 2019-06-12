const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

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

    server.get('*', (req, res) => {
      return handle(req, res);
    });


    server.listen(3001, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3001');
    });
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  });