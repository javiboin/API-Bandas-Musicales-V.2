const { application } = require('express');
const express = require('express');
const app = express();
const PORT = process.env.EXPRESS_PORT || 3000;

const connection = require('./config/db.config');

app.use(express.urlencoded( { extended: true } ));
app.use(express.json());

/* no tengo rutas, el servidor esta todo aca
  si existen rutas:
    const bandasRoutes = require("./routes/bandas.route");
    
    app.use('/api/v1/bandas', bandasRoutes);*/

app.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`);
  connection.authenticate()
    .then(() => console.log('DDBB Connected'))
    .catch(err => console.log('DDBB error', err))
})