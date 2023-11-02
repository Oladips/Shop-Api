//Import Statements

const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/product-routes')

//Middleware
const app = express();
app.use(express.json);

//  Routes
app.use('/products', router);

//  Connections and port
mongoose.connect("mongodb+srv://Admin:password@cluster0.npixp.mongodb.net/shop?retryWrites=true&w=majority"
    ,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then(()=> {
    console.log('Connected to Database')
}).catch(err => {
    console.log(err);
});

app.listen(5000);
console.log('LIstening to port:5000');
// 1VSRQ58o564TwUpU
