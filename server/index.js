console.log("Hello there");

const express = require("express");
const multer = require("multer");
const uuid = require("uuid").v4;
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images/");
  },
  filename: (req, file, cb) => {
    const { originalname } = file;
    cb(null, originalname);
  },
});
const upload = multer({ storage: storage });
//dest: "images/"
const app = express();
app.use(express.static("public"));
app.use(express.json());

app.post("/upload", upload.single("dicomImage"), (req, res) => {
  return res.status(201);
});

app.get("/", (req, res) => {
  fs.readdir("./images", (err, files) => {
    console.log(files);
  });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
