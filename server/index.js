const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')

const Post = require('./models/Post')
const Category = require('./models/Category')

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.use(multer({dest:'./uploads/'}));

// ini router ny ya pak kasi A
app.get('/posts', async (req, res) => {
    const posts = await Post.find()
    res.json(posts)
})

app.get('/posts/:id', async (req, res) => {
    const post = await Post.findById(req.params.id).exec()
    res.json(post)
})

app.post('/posts', (req, res) => {    
    Post.create(req.body, () => {
        res.json({status: 'success'})
    })
})

app.put('/posts/:id', (req, res) => {
    Post.updateOne({_id: req.params.id}, req.body, () => {
        res.json({status: 'success'})
    })
})

app.delete('/posts/:id', (req, res) => {
    const post = Post.deleteOne({_id: req.params.id}, () => {
        res.json({status: 'success'})
    })
})

app.get('/categorys', async (req, res) => {
    const category = await Category.find()
    res.json(category)
})
app.post('/categorys', (req, res) => {    
    Category.create(req.body, () => {
        res.json({status: 'success'})
    })
})
app.put('/categorys/:id', (req, res) => {
    Category.updateOne({_id: req.params.id}, req.body, () => {
        res.json({status: 'success'})
    })
})
app.delete('/categorys/:id', (req, res) => {
    const category = Category.deleteOne({_id: req.params.id}, () => {
        res.json({status: 'success'})
    })
})
app.get('/categorys/:id', async (req, res) => {
    const category = await Category.findById(req.params.id).exec();
    res.json(category)
})

app.listen(3000, ()=>{
    console.log(`Running server on http://localhost:3000/`)
})