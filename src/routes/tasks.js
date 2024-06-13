const {Router} = require("express")
const Task = require("../database/schemas/tasks")

const router = new Router()

router.get("", async (request, response) => {
    const taskList = await Task.find().sort('deadlight').exec()
    response.send(taskList)
})

router.post("", async (request, response) => {
    const {name, deadlight } = request.body

    const newTask = await Task.create({name, deadlight})

    response.status(201)
    response.send(newTask)
})

router.put("/:task/update", async (request, response) => {
    const { task } = request.params
    const { name, deadlight, status } = request.body

    const taskDB = await Task.findByIdAndUpdate(task, {name: name, deadlight: deadlight, status: status})

    response.sendStatus(202)
})

router.delete("/:task/delete", async (request, response) => {
    const { task } = request.params
    
    const taskDB = await Task.findByIdAndDelete(task)

    response.sendStatus(204)
})


module.exports = router