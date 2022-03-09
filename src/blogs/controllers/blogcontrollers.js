import blogSchema from "../database/models/blogschema.js";


const createBlog = async(req, res) => {
   
    try {
      const blogs =  await blogSchema.create({
            title: req.body.title,
            description: req.body.description,
            content: req.body.content,
            createdAt: new Date().toISOString()
        })
        res.status(200).json({
            message: 'blog successfully created',
            result:blogs
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
        
    }
}


const getBlogs = async(req, res) => {
    try {
        const allBlogs = await blogSchema.find({})
        res.status(200).json({
            message: "blog retrieved",
            result:allBlogs
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}
const getBlog = async(req,res)=>{
    try {
       let id = req.params.id;
       const blog = await blogSchema.findById(id)
       res.status(200).json({
           message:"the blog is retreived",
           result:blog
       }) 
    } catch (error) {
        res.status(500).json({
            message:error
        })
    }
}

const updateBlog = async(req, res) => {
    try {
        let id = req.params.id;
        const updated = await blogSchema.findByIdAndUpdate(id, req.body,{new:true})
        res.status(200).json({
            message:"blog successfully updated",
           
        })
    } catch (error) {
        res.status(500).json({
            message:error
        })
        
    }
}

const deleteBlog = async(req,res)=>{
    try {
        let id = req.params.id;
        await blogSchema.findByIdAndRemove(id)
        res.status(200).json({
            message:"The blog is well deleted."
        })
    } catch (error) {
        res.status(500).json({
            message:"the blog is not deleted."
        })
    }
}
export {createBlog, getBlogs, getBlog, updateBlog, deleteBlog}