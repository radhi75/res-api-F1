const express = require("express");
const connectDB = require("./config/connectDB");
const personRoutes = require("./routes/person");
const app = express();
app.use(express.json());
const port = 5004;
connectDB();
app.use("/api/person", personRoutes);
app.listen(port, console.log(`app is runnig on port ${port}`));
