const express = require('express');

const hbs = require('hbs');

require('dotenv').config();

const app = express();

// ****************** require the necessary npm package here: ******************
let bodyParser = require('body-parser')

// *****************************************************************************

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

// 4.
app.post("/create", (req, res, next) => {
	res.send(req.body.theAge);
});
// 5:
app.post("/user-info", (req, res, next) => {
	let userData = {
    firstName = req.body.firstName
  }
});

app.listen(process.env.PORT, () =>
  console.log(`Running on port: ${process.env.PORT}`)
);