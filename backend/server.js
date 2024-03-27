const express = require('express');
const app = express();
const cors = require('cors')
const colors = require('colors')
const user_router = require('./Routes/user.routes')
const mat_router = require('./Routes/materiel.routes')
const auth_router = require('./Routes/auth.routes')
const four_router = require('./Routes/fournisseur.routes')
const http = require("http")

const dotenv = require('dotenv')
dotenv.config()

app.use(cors(
    {
        origin: "http://localhost:5173",
        methods: ["POST , GET , DELETE , PUT"],
        credentials: true
    }
))


app.use(express.json())
app.use('/users', user_router);
app.use('/materiels', mat_router);
app.use('/auth', auth_router)
app.use('/fournisseurs', four_router)


const port = process.env.PORT;

server = http.createServer(app)

server.listen(port || 3005, () => {
    console.log(('server is running on port ' + port).bgGreen)
})