var jwt = require('jsonwebtoken');

module.exports.issueToken = function(payload){
  return jwt.sign(
          payload, //This is the playload we want to put inside the token
          process.env.TOKEN_SECRET || "by45nt5k4n"
  );
};

module.exports.verifyToken = function(token, verified){
  return jwt.verify(
        token, // the token to be verified
        process.env.TOKEN_SECRET || "by45nt5k4n",
        {}, //Opciones
        verified //The callback to be call when the verification is done
  );
};
