const {Router} = require("express")
const { get_tasks, create_task, update_task, delete_task } = require("../controllers/tasks")


const router = new Router()

/**
 * @swagger
 * /api/v1/tasks:
 *   get:
 *     summary: Returns all tasks
 *     tags:
 *       - Tasks
 *     responses:
 *       200:
 *         description: A successful response
 */
router.get("", get_tasks)

/**
 * @swagger
 * /api/v1/tasks:
 *   post:
 *     summary: Create a task
 *     tags:
 *       - Tasks
 *     requestBody: 
 *       description: Json with the information to create the task, parameters name and deadlight are required, parameter status for default is false (show if a task is done or undone)
 *       content: 
 *         application/json:
 *           schema: 
 *             type: object
 *             properties: 
 *               name: 
 *                 type: string
 *                 required: true
 *                 example: "Description of the task"
 *               deadlight: 
 *                 type: string
 *                 required: true
 *                 example: "2024-06-14"
 *               status:
 *                 type: boolean
 *                 example: false
 *     responses:
 *       201:
 *         description: A task was created successful
 */
router.post("", create_task)

/**
 * @swagger
 * /api/v1/tasks/{task}/update:
 *   put:
 *     summary: Update a task
 *     tags:
 *       - Tasks
 *     parameters: 
 *       - in: path
 *         name: task
 *         schema: 
 *           type: string
 *           required: true
 *           description: String ID of the task you want to get
 *     requestBody: 
 *       description: Json with the information to update of task
 *       content: 
 *         application/json:
 *           schema: 
 *             type: object
 *             properties: 
 *               name: 
 *                 type: string
 *                 example: "Description of the task"
 *               deadlight: 
 *                 type: string
 *                 example: "2024-06-14"
 *               status:
 *                 type: boolean
 *                 example: false
 *             
 *     responses:
 *       202:
 *         description: The task was updated successful
 */
router.put("/:task/update", update_task)

/**
 * @swagger
 * /api/v1/tasks/{task}/delete:
 *   delete:
 *     summary: Delete a task
 *     tags:
 *       - Tasks
 *     parameters: 
 *       - in: path
 *         name: task
 *         schema: 
 *           type: string
 *           required: true
 *           description: String ID of the task you want to get
 *     responses:
 *       204:
 *         description: A successful response
 */
router.delete("/:task/delete", delete_task)


module.exports = router