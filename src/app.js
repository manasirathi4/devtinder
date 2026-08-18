const express = require("express");
const authMiddleware = require("./middlewares/auth");

const app = express();

app.get("/profile", authMiddleware, (req, res) => {
    res.send("Your Profile");
});

app.listen(3000, () => {
    console.log("Server running on 3000");
});
