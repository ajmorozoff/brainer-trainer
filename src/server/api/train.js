const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.status(200).send('hello from the api');
});

module.exports = router;