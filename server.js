import express from "express";
import sum from "./sum.js";

const app = express();
const PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
})

app.get("/", async (req,res) => {
    res.send("Server is running perfectly")
})

app.get("/getSum/:a/:b" , async (req,res) => {
    const {a, b} = req.params;

    res.json({
        ans: sum(parseInt(a),parseInt(b))
    })
})