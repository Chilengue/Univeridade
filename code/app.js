const express = require('express');
const helmet = require('helmet');
const mongoose = require('./database/mongoose');
const aluno = require('./routes/aluno.routes');
const bodyParser = require('body-parser');



class App {

    constructor() {
        this.app = express();

        // Middleware goes here
        this.middlewares();

        // Routes go here
        this.routes();
    }

    middlewares() {
        this.app.use(helmet());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());

    };

    routes() {
        this.app.use('/aluno', aluno);
    };
}

module.exports = new App();