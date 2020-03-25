const router = require('express').Router();

const trainingRouter = require('./train'); 

router.use('/train', trainingRouter);

router.use('*', (req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;