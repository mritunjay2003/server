const express = require("express");
const databasesConnection = require("./config/database");
const cloudinary = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const cartRoutes = require("./routes/cartRoutes");
const cors = require("cors");
var morgan = require("morgan");
const productRouter = require("./routes/productRoutes");
const categoryRoutes = require("./routes/catgoryRoutes");
const orderRoute = require("./routes/orderRoutes");
const paymentRoute = require("./routes/paymentRoute");

const app = express();

// Middleware setup
app.use(express.json());
app.use(cookieParser());
app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
    })
);

// Configure CORS
const corsOptions = {
    origin: process.env.CLIENT_URL || '*', // Allow all origins if CLIENT_URL is not set
    credentials: true, // Allow cookies to be sent across origins
    optionsSuccessStatus: 200, // Some legacy browsers choke on 204
};
app.use(cors(corsOptions));

app.use(morgan("tiny"));

// Database and cloudinary setup
databasesConnection();
cloudinary();

// Routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/cart", cartRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/payment", paymentRoute);

app.get("/", (req, res) => {
    res.send("<h1> Welcome to Hunger Saviour </h1>");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
