
const mongoose =require('mongoose')
const {Schema} = mongoose;



const blogSchema = new Schema({

    username: {type: String, required:true}



})




const User = mongoose.model('User',blogSchema)









module.exports = User