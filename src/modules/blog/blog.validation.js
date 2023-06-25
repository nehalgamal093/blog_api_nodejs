import Joi from 'joi'

const addBlogSchema = Joi.object({
    title:Joi.string().min(3).max(80).required(),
    description:Joi.string().min(3).max(80).required(),
    
    /**If you want to validate an id "Id's length is 24" */
    // createdBy:Joi.string().hex().length(24)
})

export {
    addBlogSchema
}