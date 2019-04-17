const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
  const server = express();

  server.get('/national/:year', (req, res) => {
    const actualPage = '/national'
    const queryParams = { year: req.params.year }
    app.render(req, res, actualPage, queryParams);
  });

  server.get('/grouping/:year/:name/:dep', (req, res )=> {
    const actualPage = '/grouping'
    const queryParams = { year: req.params.year, name: req.params.name, dep: req.params.dep }
    app.render(req, res, actualPage, queryParams);
  })

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