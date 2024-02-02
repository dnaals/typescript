const pushRouter = require('express').Router();
const webpush = require('web-push');

let vapidKeys = webpush.generateVAPIDKeys();

webpush.setVapidDetails(
    'mailto:swm8793@naver.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

pushRouter.get('/', async function (req, res) {
    res.send('push ready')

})


module.exports = pushRouter;