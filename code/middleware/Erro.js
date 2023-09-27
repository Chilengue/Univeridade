const express=require('express');
const { routes } = require('../app');
const app = express();
const router=express.Router();

router.use((req, res, next)=>
{
console.log('Time', Date.now());
next();
})