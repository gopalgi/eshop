const express =require('express')
const expressAsyncHandler =require('express-async-handler');
const data =require('../data.js');
const Product =require('../Models/ProductModel.js');

const productRouter = express.Router();

productRouter.get('/',expressAsyncHandler(async(req,res)=>{
    const products = await Product.find({});
    res.send(products);
})
);

productRouter.get('/seed',expressAsyncHandler(async (req, res) =>{
    await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({createdProducts});
})
);

productRouter.get('/:id',expressAsyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id);
    if(product){
        res.send(product);
    }else{
        res.status(400).send({message:'product not found'});
    }
})
);

module.exports = productRouter;
