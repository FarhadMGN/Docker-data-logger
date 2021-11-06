const {Router} = require('express');
require('../models/Log');
const router = Router();
const mongoose = require('mongoose');
const Log = mongoose.model('Log');

router.get('/', async (request, response) => {
    const logs = await Log.find();
    const data = [];
    logs.forEach(el => data.push(el.info + ' ' + el.num));
    console.log("data from DB:", logs);
    response.render('data-render', {
        title: "Data Render",
        isDataRender: true,
        data
    })
});

module.exports = router;
