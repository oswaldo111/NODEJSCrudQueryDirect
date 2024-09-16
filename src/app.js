import express from 'express'
import Productosrouter from './routes/Productsroutes.js';

const app = express();


app.use(express.json());
app.use(Productosrouter);

app.listen(3000, () => {
    console.log(`Servidor de la API escuchando en http://localhost:3000`)
})

