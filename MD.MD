const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

var options = {
  customCss: '.swagger-ui .topbar { display: none }'
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));



let bi = 110100665182c
console.log(
/(^\d{12}\w$)|(^\d{9}(\w\w)\d{3}$)/.test(bi))

 if (!/(^\d{12}\w$)|(^\d{9}(\w\w)\d{3}$)/.test(bi)))
                 this.Error.push (' e obrigatorio o n de BI Completo')