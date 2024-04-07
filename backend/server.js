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
const be_router = require('./Routes/be.routes')
const bl_router = require('./Routes/bl.routes')
const bs_router = require('./Routes/bs.routes')
const dech_mat_router = require('./Routes/decharge_mat.routes')
const decharge_router = require('./Routes/decharge.routes')
const dem_ref_router = require('./Routes/dem_ref.routes')
const pv_ref_router = require('./Routes/pv_ref.routes')
const fich_affec_router = require('./Routes/fiche_affec.routes')
const inventaire_router = require('./Routes/inventaire.routes')
const inv_mat_router = require('./Routes/inv_mat.routes')
const piece_router = require('./Routes/piece.routes')
const reparation_router = require('./Routes/reparation.routes')



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
app.use('/bon-entrer', be_router);
app.use('/bon-livraison', bl_router);
app.use('/bon-sortie', bs_router);
app.use('/decharge-materiel', dech_mat_router)
app.use('/decharge', decharge_router)
app.use('/demande-reforme', dem_ref_router)
app.use('/pv-reforme', pv_ref_router)
app.use('/fiche-affec', fich_affec_router)
app.use('/inventaire', inventaire_router)
app.use('/inventaire-materiel', inv_mat_router)
app.use('/piece', piece_router)
app.use('/reparation', reparation_router)



const port = process.env.PORT;

server = http.createServer(app)

server.listen(port || 3005, () => {
    console.log(('server is running on port ' + port).bgGreen)
})