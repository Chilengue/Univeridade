






const AlunoModel=require('../model/aluno')

class aluno
{
    construtor()
    {
        this.aluno;
        this.Error= new Array();
    }
    clean(data)
    {
       switch (key){
        case 'fullname':
        if (data[key].length === 0 || data[key].length<6) 
        this.Error.push('e obrgatorio passar o nome completo')
            break;

            case 'bi':
                if (data[key].length === 0 || data[key].length <13)
                 this.Error.push (' e obrigatorio o n de BI Completo')
                   break;
                   
                   case 'age':
                if (data[key].length === 0 || data[key].length <13)
                 this.Error.push (' e obrigatorio o n de BI Completo')
                   break;
                
                   case 'gender':
                    if (data[key].length === 0 || data[key].length <13)
                     this.Error.push (' e obrigatorio o n de BI Completo')
                       break;
                    
       }

        return data;
    }
    async save(data)
    {
        try {
            await AlunoModel.create(data)
            console.log('aluno cadastrado com sucesso!');
        } catch (error) {
            this.Error.push('erro ao cadastrar  aluno')
        }
        
        
    }
}
module.exports=aluno;