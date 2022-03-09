import userSchema from '../../blogs/database/models/userschema.js'
import validator from 'validator';

const loginValidator = (req, res, next) => {
    let{email, name, password} = req.body;
    if(!email) return res.json({error: 'email missing'});
    if(!name) return res.json({error: 'name missing'});
    if(!password) return res.json({error: 'password missing'});
    // console.log("userSchema", userSchema);

    if(userSchema.findById((u) => u.email == email)) res.json({message: `user with email ${email} exists`});
  
    // if(userSchema.find((u) => u.name == name)) res.json({message: `user with email ${name} exists`})
    next();

}


export {loginValidator as default}