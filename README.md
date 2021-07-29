# Getir Assignment

An express.js api to retrieve a list of records from a MongoDb database by providing some search parameters in the body of a POST request.


## Sample `Record` object stored in MongoDb
```
  {
    "_id": "5ee1e209e07f053f990cea8c",
    "key": "TAKwGc6Jr4i8Z487",
    "createdAt": "2017-01-28T01:22:14.398Z",
    "counts": [
      150,
      160
    ],
    "value": "Getir Task"
  },
```

## Routes

### `POST /records`

**Purpose**: This will retrieve a list of records.

**Request Payload**:

The request payload will include a JSON with 4 fields that are used for filtering:
- “startDate” and “endDate” fields will contain the date in a “YYYY-MM-DD” format. It is used to filter the data using “createdAt”.
- “minCount” and “maxCount” are for filtering the data. Sum of the “count” array in
the documents should be between “minCount” and “maxCount”.

Sample request payload:

```
{
  "startDate": "2016-01-26",
  "endDate": "2018-02-02",
  "minCount": 2700,
  "maxCount": 3000
}
```


## Getting started

The application has been deployed to Heruko and is accessible at:
```
https://getir-farnaz.herokuapp.com
```