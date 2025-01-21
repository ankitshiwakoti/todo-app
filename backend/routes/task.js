const express = require('express');
const router = express.Router();


let Tasks = [
    { id: 1, task: 'Task 1', completed: false },
    { id: 2, task: 'Task 2', completed: false },
    { id: 3, task: 'Task 3', completed: true },
]

router.get('/', (req, res) => {
    res.status(200).json({ success: true, data: Tasks });
})

router.post('/', (req, res) => {

    const newTask = req.body;
    newTask.id = Tasks.length + 1;
    Tasks.push(newTask);
    res.status(201).json({ success: true, data: newTask });


})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const taskIndex = Tasks.findIndex(task => task.id === parseInt(id));
    if (taskIndex >= 0) {
        Tasks.splice(taskIndex, 1);
        res.status(200).json({ success: true, data: Tasks });
    }
    else {
        res.status(404).json({ success: false, message: 'Task not found' });
    }
});



module.exports = router;