const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(`${req.ip} requested ${req.url} at ${Date.now()}`);
    res.render('index.hbs');
})

module.exports = router;