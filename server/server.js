require('dotenv').config({path: '.env'})
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors"); // xử lý dư liệu dạng json
const { db_connect } = require("./app/configs/dbConfig");

app.use(express.json()); // để xử lý dạng dữ liệu json
app.use(express.urlencoded({extended:true})); // để xử lý dữ liệu url encoded
app.use(cors({credentials:true,origin:"*"})); // chấp thuận cors từ mọi u

const SERVER_PORT = process.env.SERVER_PORT ?? 3002

db_connect()
    .then(r => console.log("connect to db success"));
const userRouter = require('./app/routes/UserRoute');
app.use("/api/user", userRouter);

const productRouter = require('./app/routes/ProductRoute');
app.use("/api/product", productRouter);

// var categoryRouter = require('./app/routes/CategoryRoute')
// app.use("/api/category", categoryRouter);

app.get('/',(req,res,next)=>{
    res.send("Vui ve");
})

app.listen(SERVER_PORT, () => {
    console.log(`Server started on port ${SERVER_PORT}`);
});
