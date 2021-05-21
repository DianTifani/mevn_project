const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost:27017/db_uts_fe', {useNewUrlParser: true, useUnifiedTopology: true});
//mongoose.connect("mongodb+srv://dianuts:dianuts123@cluster0.mejko.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true })

const postSchema = new Schema({
    product: {
        type: String
    },
    price: {
        type: String
    },
    image_url: {
        type: String
    }
}, {
    collection: 'posts'
})

module.exports = mongoose.model('Post', postSchema)