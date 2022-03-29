const router = require('express').Router();
const apiroute = require('./api')

router.use('/api', apiroute)


module.exports = router;