/**
 * jwToken
 *
 * @description :: JSON Webtoken Service for sails
 * @help        ::
 */

var
  jwt = require('jsonwebtoken'),
  tokenSecret = "by45nt5k4n";

// Generate a token from supplied payload
module.exports.issue = function(payload){
  return jwt.sign(
    payload,
    tokenSecret,
    {
      expiresInMinutes: 180
    }
  );
};

module.exports.verify = function(token, callback){
  return jwt.verify(
    token,
    tokenSecret,
    {},
    callback
  );
};
