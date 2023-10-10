const mongoose = require('mongoose')
const booksRoutes = require

const bookSchema = new mongoose.Schema({
    title: String,
    author: {
        type: String,
        required: true,
        lowercase: true
    }
})