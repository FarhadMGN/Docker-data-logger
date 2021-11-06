const {Router} = require('express');
const router = Router();
require('../models/Log');
const mongoose = require('mongoose');
const Log = mongoose.model('Log');

router.get('/', (request, response) => {
    response.render('data-filler', {
        title: "Fill Data",
        isDataFiller: true
    })
});


router.post('/', async (request, response) => {
    const log = new Log({
        info: request.body.info,
        num: request.body.num
    });
    try {
        await log.save();
        console.log("New element in DB:", log);
        response.redirect('/data');
    } catch (e) {
        console.log(e)
    }
});
module.exports = router;
