const AlunoModel = require('../model/aluno');
const validator = require('validator');

class Aluno {
  constructor() {
    this.aluno;
    this.Error = new Array();

  }

  clean(data) {
    for (const key in data) {

       switch (key) {
        case 'fullname':
          if(data[key].length === 0 || data[key].length < 6) this.Error.push('é obrigatório passar o nome completo');
          break;
        case 'nacionality':
          if(data[key].length === 0 || data[key].length < 4) this.Error.push('é obrigatório passar a nacionalidade');
          break;
        case 'bi':
          if(data[key].length === 0 || data[key].length < 9) this.Error.push('é obrigatório passar o nº de BI completo');

          if(!/(^\d{12}\w$)|(^\d{9}(\w\w)\d{3}$)/.test(data[key])) this.Error.push('é obrigatório passar o nº de BI correto..!');

          break;
        case 'age':
          if(data[key].length === 0 || data[key].length > 10) this.Error.push('passe uma data valida');

          if(!/^(\d\d?)([-, \s, \/, \.])(\d\d?)[-, \s, \/, \.](\d\d)(\d\d?)?/.test(data[key])) this.Error.push('é obrigatório passar uma data valida!');

          break;
        case 'gender':
          if(data[key].length === 0 || data[key].length > 1) this.Error.push(' deve conter apenas uma letra (M|F)');
          break;
        case 'phone':
          if(data[key].length === 0 || data[key].length > 9) this.Error.push('deve conter 9 digitos');

          break;
        case 'email':
          if(data[key].length === 0 || !validator.isEmail(data[key])) this.Error.push(' insira um e-mail valido..!!!');
          break;
       }
    }
    this.aluno = data;
    return ;
  }

  async save (data) {
    try {
      await AlunoModel.create(data);
      console.log("Aluno cadastrado com sucesso!");
    } catch (error) {
      this.Error.push('Erro ao cadastrar o aluno')
    }
  }


}

module.exports = Aluno;





