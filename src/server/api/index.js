const router = require('express').Router();
const modelRouter = require('./model');

router.use('/model', modelRouter);

router.use('*', (req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;