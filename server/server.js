require('./config/config');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

// Configuración global de rutas
app.use(require('./routes/index'));

const options = {
    useNewUrlParser: true,
    useCreateIndex: true
};

mongoose.connect(process.env.URLDB, (err, res) => {
    if (err) throw err;

    console.log('Base de datos ONLINE');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});