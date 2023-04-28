require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/conn");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

const studentRoute = require("./Routes/studentRoute");
const studentAuthenticate = require("./middleware/studentAuthenticate");
const { logout, student } = require("./controllers/AuthRoute");

app.use(cookieParser());
app.use(express.json());
app.use("/api/v1", studentRoute);
app.get("/api/v1/studentAuthenticate", studentAuthenticate, student);
app.get("/api/v1/logout", studentAuthenticate, logout);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
