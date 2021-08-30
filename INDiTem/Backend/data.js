const bcrypt =require('bcryptjs');
const data = {
   users:[
   {
      name:'dubeygi',
      email:'admin@gmail.com',
      password: bcrypt.hashSync('1234',8),
      isAdmin:true,
   },
   {
      name:'gopal',
      email:'user@gmail.com',
      password: bcrypt.hashSync('1234',8),
      isAdmin:false,  
   },
],
    products: [
        {
            name:'Peter Slim Shirts',
            category:'shirts',
            image:'/images/p1.jpg',
            price:1399,
            countInStock:19,
            brand:'Peter England',
            rating:4.5,
            numReviews:10,
            description:
            'High Quality Product'
         },
         {
            name:'Allen Slim Shirts',
            category:'shirts',
            image:'/images/p2.jpg',
            price:1499,
            countInStock:55,
            brand:'Allen Solly',
            rating:4.1,
            numReviews:15,
            description:
            'High Quality Product'
         },
         {
            name:'Denim Slim Shirts',
            category:'shirts',
            image:'/images/p3.jpg',
            price:1599,
            countInStock:25,
            brand:'Denim',
            rating:4.2,
            numReviews:8,
            description:
            'High Quality Product'
         },
         {
            name:'Mufti Slim Pant',
            category:'Pant',
            image:'/images/p4.jpg',
            price:1199,
            countInStock:0,
            brand:'Mufti',
            rating:4.6,
            numReviews:50,
            description:
            'High Quality Product'
         },
         {
            name:'Vimal Slim Pant',
            category:'Pant',
            image:'/images/p5.jpg',
            price:1299,
            countInStock:20,
            brand:'Vimal',
            rating:4.2,
            numReviews:15,
            description:
            'High Quality Product'
         },
         {
            name:'Shiyarams Slim Pant',
            category:'Pant',
            image:'/images/p6.jpg',
            price:999,
            countInStock:15,
            brand:'Shiyarams',
            rating:3.4,
            numReviews:20,
            description:
            'High Quality Product'
         },
         

    ],
};
module.exports=data;