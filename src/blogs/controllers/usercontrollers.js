import userSchema from "../database/models/userschema.js";

// const users = [];

// const homepage = (req, res) => res.json ({message: 'your request has been received'});

// const getUsers = (req, res) => res.json ({message: 'all users retreived', users});

// const addUser = (req, res) => {
//     const user = req.body;
//     user.id = users.length;
//     users.push(user);
//     res.json({message: `user ${user.name} successfully added`, user});
// }
// const getUser = (req, res) => {
//     const user = req.body;
//     user.id = users.length;
//     users.push(user);
//     res.json({message: `user ${user.name} successfully retrieved`, user});
// }

// const updateUser = (req, res) => {
//     const id = req.params.id;
//     const user = users.find((e) => e.id == id);
//     const update = req.body;
//     Object.assign(user, update);
//     res.json({message: `user ${id} successully updated`, user})

// }

// const deleteUser = (req, res) => {
//     const {id} = req.params;
//     users.splice(id, 1);
//     res.json({message: `user ${id} successfully deleted`});
// }

// export {homepage, getUsers, addUser, getUser, updateUser, deleteUser, users}

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