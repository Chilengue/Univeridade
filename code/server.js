const App = require('./app')
require('dotenv').config();


const port = 3002
//app.use(bodyParser.json());

App.app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
