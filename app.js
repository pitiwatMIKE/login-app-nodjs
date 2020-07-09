const express = require('express');
const app = express();
const authRoute = require("./routes/auth");
const homeController = require('./controllers/home-controller');
const noFoundController = require('./controllers/page-not-found-controller');
const mogoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.set('view engine','ejs');
app.set('views','views');
app.use(authRoute);
app.get('/',homeController.home);
app.get('*',noFoundController.noFound);

mogoose
    .connect('mongodb+srv://mike:1234@cluster0-ocsev.mongodb.net/<projec>?retryWrites=true&w=majority',
            {useNewUrlParser:true, useCreateIndex:true})
            .then(()=>console.log('Database Connected'))
            .catch(()=>console.log("Can't Not Connect to Database!!!"));



const port = process.env.PORT || 3000;
app.listen(port,()=>console.log('listening on port 3000'));