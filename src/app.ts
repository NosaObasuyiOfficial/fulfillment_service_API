/*-----------Import Essential Packages-----------*/
import logger from 'morgan'
import dotenv from 'dotenv'
import get_order_route from './routes/order_request.route'
import bodyParser from 'body-parser'

/*------Importing ExpressJs----------*/
import express from 'express'
const app = express();

/*--------env setup-----------*/
dotenv.config()
const { PORT } = process.env

/*----------Middlewares-------------*/
app.use(express.json());
app.use(logger('dev'));
app.use(bodyParser.json())
app.use(express.urlencoded({extended:false}))

app.use('/', get_order_route)

/*------------PORT SETUP--------------------*/
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app

















