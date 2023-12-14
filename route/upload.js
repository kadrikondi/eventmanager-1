
const express = require( 'express')
const uploadRouter = express.Router()
const  multer = require( 'multer')
const  config  =require('../config/config')
const cloudinary = require( 'cloudinary')
const User = require('../model/user')
const Center = require('../model/center')




// upload photo multer setup
const userStorage = multer.diskStorage({
    filename: function(req, file, cb){
        cb(null, Date.now()+file.originalname)
    }
})
const imageFilter = function(req, file, cb){
    if(!file.originalname.match(/\.(jpeg|jpg|png)$/i)){
        return cb('Only image files are allowed', false)
    }
    else{
        cb(null,true)
    }
}


var uploadpic = multer({
    storage:userStorage,
    fileFilter:imageFilter
}).single('image')


cloudinary.config({

    cloud_name: config.cloud_name,
    api_key : config.api_key,
    api_secret : config.api_secret
})

// upload center photo
// uploadRouter.post('/registercenter/:id', uploadpic, async (req, res) => {
//     try {
//        const info = await User.findOne({
//       _id: req.params.id
//     }, async (err, user) => {
//       if (!user) {
//         return res.status(404).json({
//           message: 'No user found'
//         })
//       } else {
//         const {name, capacity,address,contactinfo } = req.body
//         if (!name || !capacity  ||!address  ||!contactinfo) {
//             return res.status(400).json({
//                 message: "Please fill all fields"
//             })
//         }
//         else if (req.file == undefined || req.file == '') {
//             res.status(403).json({message:` No file selected`})
//         }
//         else {
//             var postimage = req.file.path
//             const result = await cloudinary.v2.uploader.upload(postimage)
//             let postImgUrl = result.secure_url
//             const info = await Center.create(req.body, async(err,center)=>{
//                 info.image = postImgUrl
//                 center.uploadby =user.name
//                 await info.save()
//                 const centers = user.center
//                 centers.push(center)
//                 await user.save()
    
              
//                 return res.status(201).json({
//                     message: "center  created successfully",
//                     info
//                 })
//             })
            
//         }}
//     })
//     } catch (e) {
//         res.json('error post ' + e.message)
//     }
// })


uploadRouter.post('/registercenter/:id', uploadpic, async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id });

        if (!user) {
            return res.status(404).json({ message: 'No user found cant upload' });
        }

        const { name, capacity, address, contactinfo } = req.body;

        if (!name || !capacity || !address || !contactinfo) {
            return res.status(400).json({ message: 'Please fill all fields' });
        }

        if (!req.file || req.file === '') {
            return res.status(403).json({ message: 'No image selected ' });
        }

        const result = await cloudinary.v2.uploader.upload(req.file.path);
        const postImgUrl = result.secure_url;

        const center = await Center.create({
            name,
            capacity,
            address,
            contactinfo,
            image: postImgUrl,
            uploadby: user.username
        });

        user.center.push(center);
        await user.save();

        return res.status(201).json({
            message: 'Center created successfully',
            info: center,
            user:user
        });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

//user photo
uploadRouter.put('/user/updatepic/:id', uploadpic, async (req, res) => {
    try {
        if( !req.file  ||req.file == undefined || req.file == ''){
            res.status(403).json({message:` No file selected`})
        }
        else{
            var userimage = req.file.path
            const result = await cloudinary.v2.uploader.upload(userimage)
            let userImgUrl = result.secure_url
            const info = await User.findByIdAndUpdate(req.params.id, { image:userImgUrl }, {new:true})
            await info.save()
            return res.status(201).json({
                message:'Profile photo updated',
                info
            })
        }
    } catch (error) {
        logger.error('Update a user profile photo error: ' + error.message)
        return res.status(500).json({
            code: 'SERVER_ERROR',
            message: 'something went wrong, Please try again'
        });
    }
})


module.exports = uploadRouter;
