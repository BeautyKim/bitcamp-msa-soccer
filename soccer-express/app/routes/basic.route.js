const express = require('express')
const { write } = require('../controllers/board.controller')
const boardRouter = require('./board.route')
const basicRouter = express.Router()

basicRouter.use((req, res, next) => {
    console.log('### 기본 서버 ###')
    next()
})
boardRouter.post("/write", write)
module.exports = basicRouter