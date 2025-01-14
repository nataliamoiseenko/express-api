const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/test', (req, res) => {
  // res.send('Hello from test page!');
  console.log(req.query.name);
  const myRequest = `SELECT ${fiield} WHERE 'name'=${req.query.name}`;
  const dbResponse = dataBase.getData(myRequest);
  res.json(dbResponse);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
