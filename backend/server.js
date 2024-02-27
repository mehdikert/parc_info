const express = require('express');
const app = express();
const cors = require('cors')
const colors = require('colors')
const user_router = require('./Routes/user.route')
const mat_router = require('./Routes/materiel.route')
const auth_router = require('./Routes/auth.routes')
const http = require("http")

const dotenv = require('dotenv').config()


app.use(cors(
    {
        origin: "http://localhost:5173",
        methods: ["POST , GET , DELETE , PUT"],
        credentials: true
    }
))
app.use(express.json())
app.use('/users', user_router);
app.use('/mat', mat_router);
app.use('/auth', auth_router)


const port = process.env.PORT;

server = http.createServer(app)

server.listen(port || 3005, () => {
    console.log(('server is running on port ' + port).bgGreen)
})