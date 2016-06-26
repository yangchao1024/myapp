/**
 * Created by 超 on 2016-06-26.
 */
var redis = require("redis");
var config = require('config');
var client = null;

if (config.EnableRedis) {
    if (client === null) {
        client = redis.createClient(config.get('redis'));

    }
} else {
    // client = {
    //     exists: function () {
    //     },
    //     get: function () {
    //     },
    //     set: function () {
    //     },
    //     del: function () {
    //     }
    // }
}

module.exports = client;