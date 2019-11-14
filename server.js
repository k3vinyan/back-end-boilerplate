const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()


global.Something = require('./api/models/model');
const routes = require('./api/routes/routes');

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);


//DON'T FORGET TO ADD .ENV TO YUR .GITIGNORE
mongoose.connect(
    'mongodb+srv://k3vinyan:'+ process.env.DW_PW +'@cluster0-cjicp.mongodb.net/test?retryWrites=true&w=majority',
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
app.listen(port);

app.use('/', (req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found` });
})

console.log(`Server starts on port ${port}`);