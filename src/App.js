 const express = require('express');
 const app = express();

  const productsRoutes = require('./api/routes/products');
  const orderRoutes = require ('./api/routes/order');
  app.use('/orders',orderRoutes);
  app.use('/products',productsRoutes);
  app.use((req,res,next)=>{
      const error = new error('not found!');
      error.status(404);
  });

  module.exports = app;