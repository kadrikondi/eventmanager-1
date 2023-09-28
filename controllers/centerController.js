const Center = require('../models/center')

exports.displayHomePage = (req, res) => {
    res.send(`<h1>WELCOME TO THE HOME PAGE </h1>`)
}

exports.addNewCenter = async (req, res) => {
    const body = req.body
    if (!body.name && !body.capacity && !body.address) {
        res.json({
            message: `Please fill in all required inputs`
        })
    } else if (body.name.length > 15 && body.address.length > 20) {
        res.json({
            message: 'Name and address are too long'
        })
    } else {
        const newCenter = await Center.create(req.body)
        res.json(newCenter)
    }
}

exports.getAllCenters = async (req, res) => {
    const centers = await Center.find()
    res.json(centers)
}
// get single center
exports.getOneCenterById = async (req, res) => {
    const center = await Center.findById(req.params.id)
    if (center) {
        res.json(center)
    } else {
        res.json({
            message: `sorry, center doenst exist`
        })
    }
}