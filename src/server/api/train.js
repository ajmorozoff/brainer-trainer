const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.status(200).send(req.net);
});

router.put('/', (req, res, next) => {
    const { data } = req.body;
    try {
        if (Object.keys(data).length) {
            req.net.train(data);
        }
        res.status(202).send(req.net);
    }
    catch (e) {
        res.status(400).send('bad request');
    }
});

module.exports = router;