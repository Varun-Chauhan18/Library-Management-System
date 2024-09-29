require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const port = process.env.PORT || 3001;
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("MongoDB connection error:", error));

app.get("/", (req, res) => {
  return res.json({ msg: "Hello Server" });
});
// app.use("/api/users", UserRouter);
// app.use("/api/buyers", BuyerRouter);
// app.use("/api/email", sendMail);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});