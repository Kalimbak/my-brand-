import userSchema from "../database/models/userschema.js";
import dotenv from "dotenv";

dotenv.config()


const createUser = async(req, res) => {
    try {
      const users =  await userSchema.create({
            name: req.body.name,
           email: req.body.email,
           password: req.body.password
        })
        res.status(200).json({
            message: 'user successfully created',
            result:users
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
        
    }
}



const getUsers = async(req, res) => {
    try {
        const allUsers = await userSchema.find({})
        res.status(200).json({
            message: "users retrieved",
            result:allUsers
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}

const getUser = async(req,res)=>{
    try {
       let id = req.params.id;
       const user = await userSchema.findById(id)
       res.status(200).json({
           message:"the user is retreived",
           result:user
       }) 
    } catch (error) {
        res.status(500).json({
            message:error
        })
    }
}

const updateUser = async(req, res) => {
    try {
        let id = req.params.id;
        const updated = await userSchema.findByIdAndUpdate(id, req.body,{new:true})
        res.status(200).json({
            message:"user successfully updated",
           
        })
    } catch (error) {
        res.status(500).json({
            message:error
        })
        
    }
}

const deleteUser = async(req,res)=>{
    try {
        let id = req.params.id;
        await userSchema.findByIdAndRemove(id)
        res.status(200).json({
            message:"The user is deleted."
        })
    } catch (error) {
        res.status(500).json({
            message:"user not deleted."
        })
    }
}
export {createUser, getUsers, getUser, updateUser, deleteUser}