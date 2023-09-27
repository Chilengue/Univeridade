const mongoose=require('mongoose');
const Schema= mongoose.Schema;

const HorarioSchema=new Schema
({
fullname: {
    type:TRING,
    require:false,
  },
  bi: {
    type: STRING,
    require:false,
  },
  age: {
    type: DATE,
    require:false,
  },
  gender: {
    type:STRING,
    require:false,
  },
  phone: {
    type:STRING,
    require:false,
  },
  email: {
    type:STRING,
    require:false,
  }
  
 });
