'use strict';

module.exports.thanos = (event, context, callback) => {
  const response =  {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify({
      foodOne: 'watermelon',
      foodTwo: 'kool aid',
      foodThree: 'chicken'
    }),
  };


  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
