const express = require('express');
const gameRouter = express.Router()

gameRouter.use(function timeLog(req, res, next) {
    console.log('### 게임관리 서버 ###');
    next();
})

module.exports = gameRouter;