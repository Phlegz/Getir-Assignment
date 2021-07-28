//I am starting the server in this file rather than in index.js so that "app" could be imported to /tests without starting the server when called by supertest.
//Otherwise Jest wouldn't be able to close the connection after running all the tests and would throw an "open handle" error.
const app    = require('./index');
const config = require('./config/index');

app.listen(config.port, () => console.log(`App is listening on port ${config.port}`));
