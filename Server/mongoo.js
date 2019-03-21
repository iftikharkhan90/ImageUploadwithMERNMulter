const mongoose = require("mongoose");
const mongoDBErrors = require("mongoose-mongodb-errors")
mongoose.promise = global.promise;
mongoose.plugin(mongoDBErrors);

mongoose.connect("mongodb://localhost:27017/uploadimage", {useNewUrlParser: true} ,);