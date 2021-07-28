const { getConnection } = require('./helpers');

//******************************************** Controllers ***************************************************//
async function getRecords(req, res) {
  const params = req.body;
  const { db } = await getConnection();

  const filter = {
    createdAt: {$gt: new Date(params.startDate), $lt: new Date(params.endDate)},
  }
  const records = await db.find(filter).toArray()
    .catch(err => {
      console.log(err);
      res.status(500).send('Something broke!');
    });

  res.send(records);
}

//********************************************* Exports ****************************************************//
module.exports.getRecords = getRecords;