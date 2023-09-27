

const Aluno = require('../class/alunosC')

exports.add = async (req, res) => {
    const aluno = new Aluno();

    aluno.clean(req.body);
    if (aluno.Error.length !== 0) return res.json({ Errors: aluno.Error })
    await aluno.save(aluno.aluno);
    res.json({ info: `alunno ${aluno.aluno.fullname} cadastrado com sucesso!!!` })
}