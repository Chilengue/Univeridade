const express=require('express');
const route=express.Router();

const {add}=require('../controller/matriculaController');

import { Router } from 'express';

route.get('/', ()=>{})
route.post('/', add)

module.exports = routes;
