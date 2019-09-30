const express = require('express');
const Home = require('./routes/home');
const About = require('./routes/about');
const Hiw = require('./routes/howitworks');
const path = require('path');

const PORT = 3000;
const app = express();

app.use(Home);
app.use(About);
app.use(Hiw);

app.set("views","views");
app.use(express.static(path.join(__dirname,"public")));

app.listen(PORT);

