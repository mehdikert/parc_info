const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const cors = require('cors')
const colors = require('colors')

const userRouter = require('./Routes/user.route')
const http = require("http")


app.use(cors())
app.use(express.json())
app.use('/user', userRouter);



const port = 3005;

server = http.createServer(app)

server.listen(port, () => {
    console.log(('server is running on port ' + port).bgGreen)
})