const express = require('express');
const expHbs = require('express-handlebars');
const homeRoutes = require('./routes/home');
const dataRenderRoutes = require('./routes/data-render');
const dataFillerRoutes = require('./routes/data-filler');
const mongoose = require('mongoose');


const app = express();

const hbs = expHbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

// set hbs module as engine for rendering html data
app.engine('hbs', hbs.engine);//registration
app.set('view engine', 'hbs');
app.set('views', 'views');//folder name with templates

app.use(express.static('public'));//register static folder with styles as static

app.use(express.urlencoded({
    extended: true
}));
app.use('/', homeRoutes);
app.use('/data', dataRenderRoutes);
app.use('/filler', dataFillerRoutes);

const PORT = 4200;
const url = `mongodb://mongodb:27017/docker-node-mongo`;

async function start() {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        app.listen(PORT, () => {
            console.log("Server is running on port 11095");
        });
    } catch (e) {
        console.log("Cannot connect to database", e);
    }
}

start();



