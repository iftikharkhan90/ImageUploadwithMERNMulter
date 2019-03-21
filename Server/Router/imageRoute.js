var express = require('express');

var router = express.Router();
var UploadImage = require('../models/imageSchema');
// var imageUpload = require('../controllers/imageController')
var moongose = require ('mongoose');
 const multer = require ('multer');

 // multer config

 const multerConfig =
    multer.diskStorage({
         destination :function(req, file, next){
             next(null, './server/images')
         },
         filename: function(req, file, next){
             const ext = file.mimetype.split('/')[1];
             next(null,file.fieldname + '-' + Date.now() + '.'+ ext);
         }
     });
 // config
 let conf = multer({storage: multerConfig})

// route for saving image
router.post('/', conf.single('image'), function(req, res){
    console.log(req.file);
  
      const saveImage = new UploadImage();
         saveImage.imageName = req.file.originalname
         saveImage.ImagePath = req.file.destination
      
      saveImage.save(function(err, imageInfo){

        if(err){
            console.log(err);
            res.send(err);
        }else{
            console.log("data has been saved");
            res.json(imageInfo);
        }

      })

    
}  );

module.exports = router;