const Event = require('../models/event');
 //create a new event
exports.addNewEvent = async (req, res) => {
    const body = req.body;
    if(!body.name &&!body.date &&!body.startTime && !body.endTime &&!body.type){
        res.json({
            message:`please fill in all require inputs`
        })
    } else if(body.name.length >20 && body.type > 20 && body.date < Date.now() ){
        res.json({
            message:`the name or type is too long and the date is incorrect`
        })
    }else{
        const newEvent = await Event.create(body);
        res.json(newEvent);
    }
}
// get all events
exports.getAllEvents = async (req ,res) =>{
    const events = await Event.find()
    res.json(events);
}
// get a single event
exports.getOneEventById = async (req, res)=>{
    const event = await Event.findById(req.params.id)
    if(event){
        res.json(event)
    }
else{
    res.json({message: `sorry, no event`
})
}
}

exports.deleteEvent = async (req ,res)=>{
    const deleted = await Event.findByIdAndRemove(req.params.id) 
    if (!deleted){
        res.json({
            message:`error in deleting the event`

        })
    }else{
        res.json({
            message:`you just deleted an event`
        })
    }


}