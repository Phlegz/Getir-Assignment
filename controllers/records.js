const { getConnection } = require('./helpers');

//******************************************** Controllers ***************************************************//
async function getRecords(req, res) {
  const params = req.body;
  const { db } = await getConnection();

  const records = await db.collection('records').aggregate([
    { //First aggregation pipeline stage.
      $project: { //Use $project to Pass along the documents with the requested fields to the next stage in the pipeline.
        //Set the field to 0 to exclude and to 1 to include in the document.
        _id: 0,
        key: 1,
        createdAt: 1,
        //Create a new field totalCount using the reduce aggregate pipeline operator to add and reduce the values in input array to a single value.
        "totalCount": {
          $reduce: {
            input: "$counts",
            initialValue: 0,
            in: { $add: [ "$$value","$$this" ] }
          }
        },
      }
    },
    { //second aggregation pipeline stage. Apply the conditions on totalCount and createdAt
      $match: {
        totalCount: { $gt: params.minCount, $lt: params.maxCount },
        createdAt: {$gt: new Date(params.startDate), $lt: new Date(params.endDate)}
      }
    }
  ]).toArray()
    .catch(err => {
      console.log('getRecords error', err);
      res.status(404).send({
        code: 1,
        msg: 'The resource you requested was not found'
      });
    });

  res.send({
    code: 0,
    msg: 'success',
    records
  });
}

//********************************************* Exports ****************************************************//
module.exports.getRecords = getRecords;