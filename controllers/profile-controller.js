const jwt = require('jsonwebtoken');
const profile = (req,res,next) =>{
    try{
        const token = req.get('Cookie').split('token=')[1].trim();
        const user = jwt.verify(token,'SECRETKEY');
        res.render('profile',{
            data:{
                pageNmae:'profile',
                message:'',
                class:'alert alert-primary',
                username:user.username,
                loginStatus: user.loginStatus,
            }
        });
    }catch(error){
        console.log(error)
        res.render('login',{
            data:{
                pageName:'login',
                message:'กรุณาล็อคอินก่อนเข้า profile',
                class: 'alert alert-warning'
            }
        });
    }
}
module.exports = profile;