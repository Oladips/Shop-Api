const Product = require('../model/Product');

const getProducts = async (req, res, next) => {
    let product = await Product.find();

    if(!products) {
        return res.status(404).json({message: "No products"})
    }
    res.status(200). json({products})
};

const addProducts = async(req, res, next) => {
    let product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity,
        imageUrl: req.body.imageUrl,
        isFeaturedProduct: req.body.isFeaturedProduct,
    });

    product = await product.save();

    if(!product) {
        return res.status(500).json({message: "Cannot add product"});
        next();
    }

    res.status(201).json({product})
};

const getProductId = async (req, res, next) => {
    const productId = req.params.id;
    let product = await Product.findById(productId);

    if (!product) {
        return res.status(404). json({message: "No product Found"})
    }

    res.status(200).json({product});
};

const updateProduct = async (req,res, next) => {
    const productId = req.params.id;
    let product = await Product.findByIdAndUpdate(productId, {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity,
        imageUrl: req.body.imageUrl,
        isFeaturedProduct: req.body.isFeaturedProduct,
    });

    product = await product.save();

    if (!product) {
        return res.status(500). json({message: "Cannot save product"})
    }

    res.status(200).json({product});
};

const deleteProduct = async (req, res, next) => {
    const productId = req.params.id;
    let product = await Product.findByIdAndRemove(productId);

    if (!product) {
       return res.status(500). json({message: "Unable to Delete"})
    }

    res.status(200).json({message: "Product Deleted"});
};

module.exports = {
    getProducts,
    addProducts,
    getProductId,
    updateProduct,
    deleteProduct,
}