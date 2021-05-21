const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost:27017/db_uts_fe', {useNewUrlParser: true, useUnifiedTopology: true})
//mongoose.connect("mongodb+srv://dianuts:dianuts123@cluster0.mejko.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true })

const categorySchema = new Schema({
    category: {
        type: String
    }
}, {
    collection: 'categorys'
})

module.exports = mongoose.model('Category', categorySchema)