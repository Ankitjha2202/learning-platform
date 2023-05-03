import mongoose from "mongoose";
import validator from "validator";

const schema = new mongoose.Schema({
 name:{
    type:String,
    required:[true, "Please enter your name"]
 },
 email:{
    type:String,
    required:[true, "Please enter your name"],
    unique: true,
    validate:validator.isEmail,
 },
 password:{
    type:String,
    required:[true, "Please enter your password"],
    minLength:[6,"Password must be atleast 6 character"],
    select:false,
 },
 role:{
    type: String,
    enum:["admin","user"],
    default:"user",
 },
subscription:{
    id:String,
    status:String,
},
avatar:{
  public_id:{
    type:String,
    required:true,
  },
  url:{
    type:String,
    required:true,
  },
},
playlist:[{
    course:{
        type:moongose.Schema.Types.ObjectID,
        ref:"Course",
    },
    poster:String,
},
],
CreatedAt:{
    type:Date,
    default:Date.now,
},
ResetPasswordToken:String,
ResetPasswordExpire:String,
});

export const User = moongose.model("User",schema);