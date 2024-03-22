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


app.listen(port, (error) => {
    if (!error) {
        console.log("server is running on port " + port)
    } else {
        console.log("Error :" + error)
    }
})