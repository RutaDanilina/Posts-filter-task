const postSchema = require('../Schemas/PostSchema')

module.exports = {

    addPost: async(req, res) =>{

        const newPost= new postSchema(req.body)

        //siusti i duomenu baze ir ten issaugoti
        await newPost.save()

        //siusti i frontend, kad panaudoti atvaizduojant ar gaunant duomenis fronte
        res.send({post: newPost})
    }, 
    
    findPost: async (req, res) => {
        const {username} = req.body
        let posts = []
console.log(username);
        if(username.length > 0) {
            posts = await postSchema.find({username})
        } else {
            posts = await postSchema.find()
        }

        res.send({posts})
    },
    deletePost: async (req, res) => {
        const {id} = req.params
        await postSchema.findOneAndDelete({_id: id})

        res.send({success: true})
    },
    update: async (req, res) => {

        const {id, title} = req.body

        const post = await postSchema.findOneAndUpdate(
            {_id: id},
            {$set: {title: title}},
            {new : true}
        )
        res.send({success: true})
    }

}


