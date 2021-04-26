const jwt = require ('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
    const token = req.header('x-auth-token');

    if(!token)  return res.status(401).json({msg: "No JWT token found."});

    try {
        const verifed = jwt.verify(token, config.get('jwtSalt'));
        req.user = verifed.user;
        next();
    }catch(err){
        res.status(400).json({msg: "Invalid JWT token."});
    }


}