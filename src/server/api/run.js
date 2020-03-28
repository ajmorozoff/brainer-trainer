const router = require('express').Router();

router.put('/', async(req, res, next) => {
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