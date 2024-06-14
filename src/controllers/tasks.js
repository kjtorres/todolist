const Task = require("../database/schemas/tasks")

const get_tasks = async (request, response) => {
    const taskList = await Task.find().sort('deadlight').exec()
    response.send(taskList)
}

const create_task = async (request, response) => {
    const {name, deadlight } = request.body

    const newTask = await Task.create({name, deadlight})

    response.status(201)
    response.send(newTask)
}

const update_task = async (request, response) => {
    const { task } = request.params
    const { name, deadlight, status } = request.body

    const taskDB = await Task.findByIdAndUpdate(task, {name: name, deadlight: deadlight, status: status})

    response.sendStatus(202)
}

const delete_task = async (request, response) => {
    const { task } = request.params
    
    const taskDB = await Task.findByIdAndDelete(task)

    response.sendStatus(204)
}

module.exports = { get_tasks, create_task, update_task, delete_task } 