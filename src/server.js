const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://roberto:admin@cluster0-yacpf.mongodb.net/airbnb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use('/api/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3001);