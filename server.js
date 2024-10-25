require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express();

const connectDB = require('./utils/db');
const PORT = process.env.PORT;

const contactRoute = require('./router/contact-router');

const errorMiddleware = require('./middlewares/error-middleware');

const corsOption = {
    origin: "http://localhost:5173",
    // methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credential: true,
};

app.use(cors(corsOption));
app.use(express.json());
app.use("/api/form", contactRoute);

app.use(errorMiddleware);

const start = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`server is listen on PORT : ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};
start();