

const User = require('../models/User')



exports.register = function(req, res){
    
    const user = new User({
       
        username: req.body.username
    })
   
   user.save().then(result => {
       console.log(result)
       res.json(
           {    username:result.username,
               _id:result._id}
       )
      
   }) .catch(err => console.log(err))
   
   }

exports.showUsers = function(req, res){


    User.find({}, function(err, users) {
        if(err) throw err;
        res.send(users);  
      });


}