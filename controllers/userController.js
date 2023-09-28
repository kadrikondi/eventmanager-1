const bcrypt = require('bcryptjs')
const jwt = require ('jsonwebtoken')
const Users =require('../models/user')
const confiq = require('../config/config')

exports.registerPage= (req,res)=>{
    res.json({message:'homepage'})
}
exports.registerUser= async(req,res)=>{
    const body = req.body;
    const hashpassword= bcrypt.hashSync(body.password, 10)
    if (!body.name &&!body.username &&!body.email && body.password){
    res.json( 'empty field bro try and register')
}else if(body.password.length<6 ||body.name.length<3){
    res.json("password must be more than six charater and name must more >3 charater ")
}else{
    
    const newUser = await Users.create({
      name:body.name,
      username:body.username,
      email:body.email,
      password: hashpassword

    })

            res.json({ user:newUser })
     
    
}
}
exports.getLoginpage=(req,res)=>{
    res.json(`loginpage`)
}
exports.loginUser= async (req,res)=>{
        const body =req.body
        if(!body.email && !body.password){
            res.json('empty field')
        } else{
            await Users.findOne({email:req.body.email}, (err, Users) => {
                if(err) throw err
            if(!Users){
                console.log(err)
                res.json('Invalid email')
            }
            else if(Users){
                //console.log(Users);
             const validPassword= bcrypt.compareSync(req.body.password,Users.password)
                    
                    if(validPassword){
         const token = jwt.sign({password:Users.password,email:Users.email},confiq.secret,{expiresIn:'2h'})
                       console.log(Users)
                       res.json({
                           message:`login successful`,
                            user:Users,
                           Auth:true,
                           token:token
                       })
                        
                        
                       }else{
                        res.json('incorect password')
                        
                        
                    }
                   
            }
            
        })
    }  
    

    }

exports.verifyUser=async(req,res)=>{
    const token=req.headers.Authorization.split[1]
    //const token = req.headers.['x-access-token]
    if(!token){
        res.json(`Not Authorized`)
    }else await jwt.verify(token,confiq.secret,(err,decoded)=>{
        if(err){
            res.json(`Error`)
        }else{
            req.Users=decoded
            next()
        }
    })

}