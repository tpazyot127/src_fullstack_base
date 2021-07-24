const express = require('express')
const bodyParser = require('body-parser');
const userRouter = require('./routers')
const port = process.env.PORT;
require('./db/db');

const app = express();
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.status(200).send({
        app: 'NodeJs',
        isRunning: true
    })
});
// app.use(express.json())
app.use('/api', userRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});


// setup socket.io
