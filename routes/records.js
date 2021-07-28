const router = require('express').Router();
const { getRecords } = require('../controllers/records');

//***************************************** Route Handlers*************************************************//
//Retrieve records
router.post('/', getRecords);

//********************************************* Exports ***************************************************//
module.exports = router;