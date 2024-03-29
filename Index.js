const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { error } = require("console");

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

//schema for creating user model
const Users = mongoose.model('Users', {
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    cartData: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

//creating end point for registering user 
app.post('/signup', async(req, res) => {

    let check = await Users.findOne({ email: req.body.email });
    if (check) {
        return res.status(400).json({ success: false, error: "User email already in use." })
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }
    const user = new Users({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    })
    await user.save();
    //creating token
    const data = {
            user: {
                id: user.id
            }
        }
        //generating token
    const token = jwt.sign(data, '@fashion-hub');
    res.json({ success: true, token });
})

//creating endpoint for user login
app.post('/login', async(req, res) => {

    let user = await Users.findOne({ email: req.body.email });
    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {
                user: {
                    id: user.id
                }
            }
            const token = jwt.sign(data, '@fashion-hub');
            res.json({ success: true, token });
        } else {
            res.json({ success: false, error: 'Wrong Password' });
        }
    } else {
        res.json({ success: false, error: 'Wrong email id' })
    }
})

// end ponit for new collection
app.get('/newcollection', async(req, res) => {
    let products = await Product.find({});
    let newcollection = products.slice(1).slice(-8);
    console.log("New Collection fetched");
    res.send(newcollection);
})

// app.get('/newcollection', async(req, res) => {
//     let products = await Product.find({}).sort({ updatedAt: -1 }).limit(8);
//     console.log("New Collection fetched");
//     res.send(products);
// });

//creating endpoint for popular among women
app.get('/popularamongwomen', async(req, res) => {
    let products = await Product.find({ category: "women" });
    let popularamongwomen = products.slice(0, 4);
    console.log("Popular among women fetched");
    res.send(popularamongwomen);
})

//creating middleware to fetch user
const fetchUser = async(req, res, next) => {
        const token = req.header('auth-token');
        if (!token) {
            res.status(401).send({ error: "Please authenticate using valid token" })
        } else {
            try {
                const data = jwt.verify(token, '@fashion-hub');
                req.user = data.user;
                next();
            } catch (error) {
                res.status(401).send({ errors: "Please authenticate using valid token" })
            }
        }
    }
    //  creating endpoint for add product in cartdata
app.post('/addtocart', fetchUser, async(req, res) => {
    console.log("Added Successfully", req.body.itemId);
    let userData = await Users.findOne({ _id: req.user.id });
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
    res.json("Added Successfully")
})

// app.post('/addtocart', fetchUser, async(req, res) => {
//     try {
//         let userData = await Users.findOne({ _id: req.user.id });
//         userData.cartData[req.body.itemId] += 1;
//         await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
//         res.json({ success: true, message: "Item added to cart successfully" });
//     } catch (error) {
//         console.error("Error adding item to cart:", error);
//         res.status(500).json({ success: false, error: "Failed to add item to cart" });
//     }
// })

//creating endpoint for removing product in cart data
// app.post('/removefromcart', fetchUser, async(req, res) => {
//     console.log("Removed Successfully", req.body.itemId);
//     let userData = await Users.findOne({ _id: req.user.id });
//     if (userData.cartData[req.body.itemId] > 0)
//         userData.cartData[req.body.itemId] -= 1;
//     await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
//     res.send("Removed Successfully")
// })

app.post('/removefromcart', fetchUser, async(req, res) => {
    try {
        console.log("Removed Successfully", req.body.itemId);
        let userData = await Users.findOne({ _id: req.user.id });
        if (userData.cartData[req.body.itemId] > 0)
            userData.cartData[req.body.itemId] -= 1;
        await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
        res.json({ success: true, message: "Item removed from cart successfully" });
    } catch (error) {
        console.error("Error removing item from cart:", error);
        res.status(500).json({ success: false, error: "Failed to remove item from cart" });
    }
})

//creating endpoint to get cartdata
// app.post('/getcart', fetchUser, async(req, res) => {
//     console.log("GetCart");
//     let userData = await Users.findOne({ _id: req.user.id });
//     res.json(userData.cartData)
// })
app.post('/getcart', fetchUser, async(req, res) => {
    console.log("GetCart");
    let userData = await Users.findOne({ _id: req.user.id });
    res.json(userData.cartData);
})

app.listen(port, (error) => {
    if (!error) {
        console.log("server is running on port " + port)
    } else {
        console.log("Error :" + error)
    }
})