const express = require("express"); // import express library
const app = express(); // create a fresh instance of it

// Sum route
app.get("/sum", function (req, res) {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    res.json({
        ans: a + b
    });
});

// Multiplication route
app.get("/mul", function (req, res) {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    res.json({
        ans: a * b
    });
});

// Subtraction route
app.get("/sub", function (req, res) {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    res.json({
        ans: a - b
    });
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
