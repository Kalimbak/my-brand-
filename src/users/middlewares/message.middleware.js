const messageValidation = (req, res, next) =>{

    let {
        email,
        names,
        project,
        message
    } = req.body;
    if (email= ""){
        return res.json({error: "Email required"});
    }
    if (names= ""){
        return res.json({error: "names required"});
    }
    if(project ="") {
        return res.json({error: "mention your project"});
    }
    if(message = ""){
        return res.json({error: "message required"})
    }
}

export { messageValidation as default}