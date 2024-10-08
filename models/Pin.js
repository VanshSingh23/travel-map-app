const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const PinSchema=new Schema({
    username:{
        type: String,
        require: true,
    },
    title:{
        type: String,
        require: true,
    },
    desc:{
        type: String,
        require: true,
    },
    rating:{
        type: Number,
        require: true,
        min: 0,
        max: 5,
    },
    latitude:{
        type: Number,
        require: true,
    },
    longitude:{
        type: Number,
        require: true,
    }
},{timestamps: true});

module.exports=mongoose.model("Pin",PinSchema);