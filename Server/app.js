const express = require('express');
// const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieparser =require('cookie-parser');

const app = express();
  


var urlencodedParser = bodyParser.urlencoded({ extended: true });
var jsonParser = bodyParser.json();
app.use(urlencodedParser);
app.use(jsonParser);


app.use(cookieparser());

//middleware

app.use('/upload',require('./Router/imageRoute.js'));




// database require
require("./mongoo");



app.use(express.static('./upload-image/build'));
app.use((req, res, next) => {
    req.status = 404;
    const error = new Error("Routes not found");
    next(error);
})

const port = 3434;
app.listen(port, () => console.log('App listening on port ' + port));