const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlunoSchema = new Schema
    ({
        fullname: {
            type: String,
            require: false,
        },
        nacionality: {
            type: String,
            require: false,
        },
        bi: {
            type: String,
            require: false,
        },
        age: {
            type: Date,
            require: false,
        },

        Encarregado: {
            type: String,
            required: true
        },
        Bairro:
        {
            type: String,
            require: true
        },

        gender: {
            type: String,
            require: false,
        },
        phone: {
            type: Number,
            require: false,
        },
        email: {
            type: String,
            require: false,
        },
        deficiency: {
            type: Boolean,
            require: false,
        },

        disabilityType: {
            type: String,
            require: false
        },
        courseId: {
            type: String,
            require: false
        },
    }
    );
mongoose.model("aluno", AlunoSchema);
const AlunoModel = mongoose.model("aluno");

module.exports = AlunoModel;