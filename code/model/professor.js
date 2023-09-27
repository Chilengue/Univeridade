const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const professorSchema = new Schema
    ({
        fullname: {
            type: TRING,
            require: false,
        },
        bi: {
            type: STRING,
            require: false,
        },
        age: {
            type: DATE,
            require: false,
        },
        gender: {
            type: STRING,
            require: false,
        },
        phone: {
            type: STRING,
            require: false,
        },
        email: {
            type: STRING,
            require: false,
        },
        Disciplinas:
        {
            type: String,
            required: true
        },
        Cursos: {
            type: String,
            required: false
        },
        Horarios: {
            type: String,
            require: false,
        },
        Observacoes: {
            type: String,
            require: false,
        }

    });
mongoose.model("professor", professorSchema);
const ProfessorModel = mongoose.model("professor");

module.exports = ProfessorModel;




