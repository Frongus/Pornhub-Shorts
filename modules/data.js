const express = require('express');
const router = express.Router();
const pornhub = require('@justalk/pornhub-api');

const Options = [
    "ass",
    "pussy",
    "perfect",
    "titty",
    "model",
    "latina",
    "big ass",
    "oily",
    "anal",
    "cream pie",
    "milking table"
]

var response;

router.get('/get/:id', (req, res) => {
    console.log(`${req.ip} requested ${req.url} at ${Date.now()}`);
    if(req.params.id == "true")
    {
        Get()
        async function Get() {
         var randomnum3 = Math.floor(Math.random() * Options.length);
         var randomnum2 = Math.floor(Math.random() * 5);
         var data = await pornhub.search(Options[randomnum3], null, {max_duration : 10, page : randomnum2});
         var randomnum = Math.floor(Math.random() * 19);
         var newData = data.results[randomnum].link;
         console.log(data.results[randomnum].link);
         response = newData.replace('https://www.pornhub.com/view_video.php?viewkey=', '');

         res.json(`[{${response}}]`)
        }
    }
    else {
        res.json('[{err01}]');
    }
});

module.exports = router