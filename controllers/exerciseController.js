
const Exercise = require('../models/Exercise')



exports.addExercise = function(req, res){

    if(req.body.date){    
        
    const exercise = new Exercise({

        userId:         req.body.userId,
        description:    req.body.description,
        duration:       req.body.duration,
        date:           req.body.date

    })

    exercise.save().then(result =>{
        res.json({

            userId:         result.userId,
            description:    result.description,
            duration:       result.duration,
            date:           result.date

        })
    }).catch((err)=>{
        console.log(err)
    })

    }else{

                
    const exercise = new Exercise({

        userId:         req.body.userId,
        description:    req.body.description,
        duration:       req.body.duration,
        date:           new Date().toISOString().slice(0, 10)

    })

        exercise.save().then(result =>{
            res.json({

                userId:         result.userId,
                description:    result.description,
                duration:       result.duration,
                date:           result.date
    
            })
        }).catch((err)=>{
            console.log(err)
        })

}
}


exports.log = function(req, res){


    Exercise.find({userId:req.params.userId}, function(err, exercises) {

        if(err) throw err;

        res.send( {exercises,
            count: exercises.length});  

      });






}
