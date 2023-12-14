const Center = require('../model/center')


// display home page
exports.displayHomePage = (req, res) => {
    res.send(`<h1> WELCOME TO EVENT CENTRE APP HOME</h1>`)
}


// // add center
// exports.addNewCenter = async (req, res) => {
//     // console.log(req.file)
//     const body = req.body
//     if (!body.name || !body.address || !body.contactinfo || !body.capacity) {
//         res.json({
//             message: 'please fill all required field'
//         })
//     } else {
//         const newCenter = await Center.create({
//             name: body.name,
//             capacity:body.capacity,
//             address:body.address,
//             contactinfo:body.contactinfo,
//             image:req.file.path

//         }
//             )
//         res.json({
//             data: newCenter,
//             message: 'sucessful register'
//         })
//     }
// }

// get all center
exports.getAllCenter = async (req, res) => {
    const center = await Center.find()
    res.json({
        center: center,
        message: 'center'
    })
}
// get a single event
exports.getOneCenterById= async (req,res)=>{
    const center = await Center.findById(req.params.id)
    if(center){
        res.json(center)
    }else{
        res.json({
            message:`sorry, no center`
        })
    }
}

// delete center

exports.deleteCenter = async(req,res)=>{
    const deleted = await Center.findByIdAndRemove(req.params.id)
    if(deleted){
        res.json({
            message:    `error in deleting the center`
        })
    }else{
        res.json({
            message:`you just deleted a center`
        })
    }
}
// update center

exports.updateCenter = async (req,res)=>{
    const update = await Center.findOne({
        _id:req.params.id
    })
    if(update){
        update.name =req.body.name|| update.name
        update.capacity = req.body.capacity||update.capacity
        update.address = req.body.address ||update.address
        update.contactinfo = req.body.contactinfo||update.contactinfo

        await update.save()
        res.json({
            message:`center update successful`
        })
    }else{
        res.json({
            message:'no center'

        })
    }
}