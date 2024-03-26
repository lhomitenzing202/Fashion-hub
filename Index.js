const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

//database connection  with mongoose
mongoose.connect('mongodb+srv://tenzo:tenzo123@fashionhubcluster.giltway.mongodb.net/')

//api creation

app.get("/", (req, res) => {
    res.send("Express app is running")
})

//Image storage engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.filename}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({ storage: storage })

//creating image upload endpoint
app.use('/images', express.static('upload/images'))

app.post("/upload", upload.single('product'), (req, res) => {
        res.json({
            success: 1,
            image_url: `http://localhost:${port}/images/${req.file.filename}`
        })
    })
    //schema for creating products
const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    Date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    },
});

const Product = mongoose.model('Product', productSchema);

app.post('/addProduct', async(req, res) => {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
        let last_product_arry = products.slice(-1);
        let last_product = last_product_arry[0];
        id = last_product.id + 1;
    } else {
        id = 1;
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log('Saved')
    res.json({
        success: true,
        name: req.body.name,
    });
});

//creating api for deleting products

app.post('/removeProduct', async(req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log("Removed")
    res.json({
        success: true,
        name: req.body.name
    })
})

//creating api for getting all product
app.get('/allProducts', async(req, res) => {
    let products = await Product.find({});
    console.log("All products Fetched");
    res.send(products);
})

app.listen(port, (error) => {
    if (!error) {
        console.log("server is running on port " + port)
    } else {
        console.log("Error :" + error)
    }
})