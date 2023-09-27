const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MatriculaSchema = new Schema
    ({
        NRConta:
        {
            type: String,
            require: false
        },

        Data_Matricula:
        {
            type: Date,
            require: false,
        },
        ID_aluno:
        {
            type: String,
            required: [true, 'O campo aluno é obrigatório']
        },
        Nivel_academico:
        {
            type: String,
            require: false
        },

        Curso:
        {
            type: String,
            require: false
        },
        turno:
        {
            type: String,
            require: false
        },
        turma:
        {
            type: String,
            require: false,
        },
        anoLetivo:
        {
            type: Number,
            require: true
        }
        
    });
mongoose.model("matricula", MatriculaSchema);
const MatriculaModel = mongoose.model("matricula");

module.exports = MatriculaModel;
