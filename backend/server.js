const express = require('express');
const cors = require('cors');
const port = 3000;
const taskRoutes = require('./routes/task');


const app=express();
app.use(cors());
app.use(express.json());

app.use('/tasks', taskRoutes);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
