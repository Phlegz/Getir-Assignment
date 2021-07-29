const request = require("supertest");
const { closeMongoConnection } = require('../data/mongoDbConnector');
const app = require('../index');

//NOTE: I created a mock db locally and set the url for MONGODB_CONNECTIONS inside my .env.test file for testing purposes.
//Ideally we would to use a library for mocking the data where we create the database, collection and records before testing and purge them after the tests are done. I did not get to do that due to lack of time.
describe('testing-records-routes', () => {
  //Close the database connection after running the test.
  afterAll(async () => {
    await closeMongoConnection();
  });

  it('POST /records - success - it should retrieve records based on the search params', async () => {
    const res = await request(app)
      .post('/records')
      .send({
        startDate: "2016-01-26",
        endDate: "2018-02-02",
        minCount: 2700,
        maxCount: 3000
      });
      expect(res.statusCode).toEqual(200);
      expect(res.body.msg).toEqual('success');
      expect(Array.isArray(res.body.records)).toBeTruthy();
  });
});
