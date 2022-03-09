import mongoose from "mongoose";
import jwt from "jsonwebtoken"; 
import validator from "validator";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    name:{
        type:'String',
        required:true
    },
    email:{
        type:'String',
        required:true,
        unique:true
    },
    password: {
        type: String,
        required:  [true,'Please enter password'],
        minlength: 8,
        select:false
    },
    // confirmpassword: {
    //     type: String,
    //     select:false,
    //     required: [true,'Re-type  password'],
    //     validate: {
    //         //this work on create and save only not update
    //         validator: function(el){
    //             return el === this.password
    //         },
    //     message: 'password not match'
    //     }
    // },
  

});
userSchema.pre('save',async function(next){
    //Only run this if password was actualy modified
    if(!this.isModified("password")) return next();
    //hash password with cost 12
    this.password= await bcrypt.hash(this.password, 12)
    //Delete password confirm
    // this.confirmpassword =undefined
    next()
})




export default new mongoose.model('Users', userSchema)