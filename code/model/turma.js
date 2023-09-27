const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MatriculaSchema = new Schema
    ({
        nomeTurma: {
            type: TRING,
            require: false,
        },

        nomeEstudante:
        {
            type: String,
            require: flase
        },
        anoletivo:
        {
            type: Date,
            require: true
        },
        Turno:
        {
            type: Date,
            require: false
        },
        NivelAcadeimico:
        {
            type: String,
            require: true
        },
        NumberALuno:
        {
            type: Number,
            require: true
        },
    });
mongoose.model("Matricula", MatriculaSchema);
const MatriculaModel = mongoose.model("matricula");
module.exports = MatriculaModel;