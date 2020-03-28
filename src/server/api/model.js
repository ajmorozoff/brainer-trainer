const router = require('express').Router();

router.get('/', (req, res, next) => {
    try {
        if (req.net.sizes.length) {
            return res.status(200).send(req.net);
        }
       return res.status(200).send({});
    }
    catch (e) {
        res.status(500).send('Internal server error');
    }
})

router.post('/train', (req, res, next) => {
    const { data } = req.body;
    try {
        if (Object.keys(data).length) {
            req.net.train(data);
        }
        res.status(204).send();
    }
    catch (e) {
        res.status(400).send('bad request');
    }
});

router.put('/run', async(req, res, next) => {
    const { input } = req.body;
    try {
        const result = await req.net.run(input)
        res.status(200).send(result);
    }
    catch (e) {
        res.status(400).send('bad request');
    }
});


module.exports = router;