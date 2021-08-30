const jwt = require('jsonwebtoken');

 const generateToken = (user) =>{
    return jwt.sign(
        {
            id:user._id,
             name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
        },
        process.env.JWT_SECRET || "somethingsecret",
        {
            expiresIn:"30d",
        }

    );

};

 const isAuth = (req, res, next) => {
 //const { headers: { authorization } } = req;
  const authorization = req.headers.authorization;
  console.log(authorization);
  if (authorization) {
    const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
    console.log(token);
    jwt.verify(
      token,
      process.env.JWT_SECRET || "somethingsecret",
      (err, decode) => {
        if (err) {console.log(err);
          res.status(401).send({ message: 'Invalid Token' });
        } else {
          req.user = decode;
          next();
        }
      }
 );
  } 
  else {
    res.status(401).send({ message: 'No Token' });
  }
};


module.exports=generateToken;
module.exports=isAuth;