import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title:{
        type:'String',
        required:true
    },
    description:{
        type:'String',
        required:true
    },
    content:{
        type:'String',
        required:true
    }
},
{ timestamps: true })

// userSchema.pre('save',async function(next){
//     //Only run this if password was actualy modified
//     if(!this.isModified("password")) return next();
//     //hash password with cost 12
//     this.password= await bcrypt.hash(this.password, 12)
//     //Delete password confirm
//     this.confirmpassword =undefined
//     next()
// })

export default new mongoose.model('Blogs', blogSchema)