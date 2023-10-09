// Server on nodejs with express
const express = require("express")
const app = express()
app.use("/", (req, res, next) => {
    res.send("This is the express server")
})
app.get("/hello", (req, res, next) => {
    res.send("This is the hello response");
})
app.listen(3000, () => {
    console.log("Server is Running")
})
