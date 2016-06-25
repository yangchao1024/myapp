var express = require('express');
var router = express.Router();
var request = require('request');
/* GET home page. */
router.get('/', function (req, res, next) {

    request.post({
        url: config.bll.url + '/toutiao/index',
        form: {
            type: 'top',
            key: config.bll.key
        }
    }, function (err, httpResponse, body) {
        var model = {title: '', newsList: ''};
        try {
            var jsonobj = JSON.parse(body);
            model = {title: 'Express', newsList: jsonobj.result.data};
            res.render('index', model);
        } catch (ex) {
            console.trace(ex.message);
        }
        res.render('index', model);

    });

});

module.exports = router;
