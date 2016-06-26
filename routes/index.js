var express = require('express');
var router = express.Router();
var request = require('request');
var redis = require('../common/myredis');

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
        if (err == null) {
            var jsonobj = JSON.parse(body);
            model = {title: 'Express', newsList: jsonobj.result.data};
        } else {
            console.trace(err);
        }
        res.render("index", model, function (err, html) {
            if (html != null) {

                redis.set('view/', html);
            }

        });

    });

});

module.exports = router;
