const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "missing_persons"
});

db.connect(err => {
    if (err) throw err;
    console.log("MySQL Connected...");
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    
    db.query(sql, [email, password], (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            res.json({ success: true });
        } else {
            res.json({ success: false });
        }
    });
});

app.get("/api/missing", (req, res) => {
    const sql = "SELECT name, photo, last_seen, location, body_metrics FROM missing_persons";

    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

const express = require("express");
const mysql = require("mysql");
const multer = require("multer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "lost_trace"
});

const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage: storage });

app.post("/api/add-person", upload.single("photo"), (req, res) => {
    const { name, missing_date, age, contact } = req.body;
    const photo = req.file ? req.file.filename : null;

    const sql = "INSERT INTO missing_persons (name, missing_date, age, photo, contact) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [name, missing_date, age, photo, contact], (err, result) => {
        if (err) throw err;
        res.json({ message: "Missing person added successfully!" });
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});




