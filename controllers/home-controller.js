const verifyToken = require('../utilities/verify');
const { verify } = require('jsonwebtoken');
const home = (req,res,next)=>{
    const status = verifyToken(req);
    res.render('home',{
        data:{
            pageName:'Home',
            message:'Home Page',
            class:'alert alert-primary',
            loginStarus:status
        }
    });
};
module.exports.home = home;