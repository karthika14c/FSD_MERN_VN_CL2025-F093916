require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/auth",require("./routes/authRoutes"));
app.use("/api/doctors",require("./routes/doctorRoutes"));
app.use("/api/appointments",require("./routes/appointmentRoutes"));
app.use("/uploads", express.static("uploads"));

app.listen(process.env.PORT,()=>console.log("Server Running"));
