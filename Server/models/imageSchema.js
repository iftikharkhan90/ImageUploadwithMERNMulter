var mongoose = require('mongoose');
var uploadImageSchema = new mongoose.Schema({
    imageName:{
         type: String,
         required: true
    },
    ImagePath:{
        type: String,
        required: true
    }
    
    
    
   
},
{
    timestamp: true ,
}
);

var UploadImage = mongoose.model('imageDetails', uploadImageSchema)
module.exports =UploadImage;