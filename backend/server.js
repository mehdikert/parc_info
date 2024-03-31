const express = require('express');
const app = express();
const cors = require('cors')
const colors = require('colors')
const user_router = require('./Routes/user.routes')
const auth_router = require('./Routes/auth.routes')
const four_router = require('./Routes/fournisseur.routes')
const marq_router = require('./Routes/marque.routes')
const mod_router = require('./Routes/modele.routes')
const equip_router = require('./Routes/equipement.routes')
const mat_router = require('./Routes/materiel.routes')


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


app.use(express.json());
app.use('/util', user_router);
app.use('/auth', auth_router);
app.use('/four', four_router);
app.use('/marque', marq_router);
app.use('/modele', mod_router);
app.use('/equip', equip_router);
app.use('/mat', mat_router);





const port = process.env.PORT;

server = http.createServer(app)

server.listen(port || 3005, () => {
    console.log(('server is running on port ' + port).bgGreen)
})