const express = require('express');
const route = express.Router();

const { add } = require('../controller/AlunoController');

route.get('/', (r) => { })
route.post('/', add);

route.delete('/', ()=>{})

route.patch('/', () => { })

route.put('/', ()=>{})

route.param('/', (req, res, next, bi) => {
    // try to get the user details from the User model and attach it to the request object
    User.find(id, (err, user) => {
      if (err) {
        next(err)
      } else if (user) {
        req.user = user
        next()
      } else {
        next(new Error('failed to load user'))
    }
})
})



module.exports = route;