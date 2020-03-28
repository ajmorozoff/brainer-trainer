const router = require('express').Router();

const trainingRouter = require('./train'); 
const runRouter = require('./run');

router.use('/run', runRouter);
router.use('/train', trainingRouter);

router.use('*', (req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;