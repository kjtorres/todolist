const mongoose = require("mongoose")

const nowDate = new Date()

const TaskSchema = new mongoose.Schema({
    name: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    deadlight: {
        type: mongoose.SchemaTypes.Date,
        required: false,
        default: nowDate.setDate(nowDate.getDate() + 7)
    },
    status: {
        type: mongoose.SchemaTypes.Boolean,
        default: false
    },
    createdAt: {
        type: mongoose.SchemaTypes.Date,
        required: true,
        default: new Date()
    }
})

module.exports = mongoose.model("tasks", TaskSchema)