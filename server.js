const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const connectDB = require("./config/config");
require("colors");
const cors = require("cors");

//config dotenv
dotenv.config();

//connection mongodb
connectDB();

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//route
app.use("/api/dresses", require("./routes/dressRoute"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/orders", require("./routes/orderRoute"));

app.get("/",function(req,res){
  res.send("this is home page for dress app project server..");
});
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(
    `Server Running  on port no ${process.env.PORT}`
      .bgMagenta.white
  );
});
