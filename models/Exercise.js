
const mongoose =require('mongoose')
const {Schema} = mongoose;



const blogSchemaExercise = new Schema({

    userId: {type: String, required:true},
    description:{type:String, required:true},
    duration:{type:String,required:true},
    date:{type: String}



})




const Exercise = mongoose.model('Exercise',blogSchemaExercise)









module.exports = Exercise