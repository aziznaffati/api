import express from 'express';
import mongoose from 'mongoose'
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';


import userRoutes from './routes/connection.js'
import chariotRoutes from './routes/chariot.js'
import panneRoutes from './routes/panne.js'
import ligneRoutes from './routes/ligne.js'
import produitRoutes from './routes/produit.js'
import usersRoutes from './routes/user.js'
import contenaireRoutes from './routes/contenaire.js'


dotenv.config();


const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cookieParser())
 app.use(cors({
    credentials: true,
    origin: ['https://pfecims.web.app', 'http://localhost:3000', 'http://localhost:8000', 'http://localhost:8080']  //3 react , 8 view, 42 angular
})); 


app.use("/user", userRoutes);
app.use("/chariot", chariotRoutes);
app.use("/panne", panneRoutes);
app.use("/ligne", ligneRoutes);
app.use("/produit", produitRoutes);
app.use("/users", usersRoutes);
app.use("/contenaire", contenaireRoutes);







const PORT = process.env.PORT || 5000;


const db_url  = 'mongodb+srv://aziz:TVUW2dKiUlRbeA8r@cluster0.2ywfi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, () => {
    console.log('Database connected');
    app.listen(PORT, () => {
        console.log(`Starting server at http://localhost:${PORT}`);
    })
})

