const router = require('express').Router();

router.post('/load', (req, res, next) => {
    return res.status(204).send();
});

router.post('/reset', (req, res, next) => {
    //this is handled by middleware in express.js
    return res.status(204).send();
});

router.put('/export', (req, res, next) => {
    try {
        const netJSON = req.net.toJSON();
        res.status(200).send(netJSON);
    }
    catch (e) {
        res.status(500).send('Internal server error');
    }
});

router.post('/train', (req, res, next) => {
    const { data } = req.body;
    try {
        req.net.train(data);
        res.status(204).send();
    }
    catch (e) {
        res.status(500).send('Internal server error');
    }
});

router.put('/run', async(req, res, next) => {
    const { input } = req.body;
    try {
        if (req.net.sizes) {
            const result = await req.net.run(input)
            return res.status(200).send(result);
        }
        return res.status(400).send('Net must be initialized');
    }
    catch (e) {
        res.status(500).send('Internal server error');
    }
});

router.get('/', (req, res, next) => {
    try {
        if (req.net.sizes) {
            return res.status(200).send(req.net);
        }
       return res.status(200).send({});
    }
    catch (e) {
        res.status(500).send('Internal server error');
    }
});

module.exports = router;