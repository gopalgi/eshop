 const express = require('express');
 const mongoose =require('mongoose');
 const cors =require('cors');
 const dotenv =require('dotenv');
const userRouter = require('./Routers/userRouter');
const productRouter = require('./Routers/productRouter');
const orderRouter = require('./Routers/orderRouter');


dotenv.config();
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/INDiTem',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
});


app.use('/api/users',userRouter);
app.use('/api/products',productRouter);
app.use('/api/orders',orderRouter);
app.get('/api/config/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
  });
  

app.get('/' ,(req, res) => {
    res.send('Service is ready');
});
app.use((err,req,res,next) =>{
    res.status(500).send({message: err.message});
});
const port = process.env.port || 5000;
app.listen(port, () => {
    console.log(`Service at http://localhost:${port}`);
})
