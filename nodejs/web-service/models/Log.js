const mongoose = require("mongoose");
const {Schema} = mongoose;


const LogSchema = new Schema({
    info: String,
    num: Number,
});

const Log = mongoose.model("Log", LogSchema);
module.exports = Log;
