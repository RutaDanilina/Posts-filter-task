const mongoose= require('mongoose')
const Schema= mongoose.Schema


const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const exportPost = mongoose.model('postSchema', postSchema)
module.exports = exportPost 