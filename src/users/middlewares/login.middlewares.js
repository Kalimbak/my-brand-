import userSchema from '../../blogs/database/models/userschema.js'

const loginValidator = (req, res, next) => {
    let{email, name} = req.body;
    if(!email) return res.json({error: 'email missing'});
    if(!name) return res.json({error: 'name missing'});
    if(userSchema.find((u) => u.email == email)) res.json({message: `user with email ${email} exists`})
    next();

}

export {loginValidator as default}