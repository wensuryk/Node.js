const express = require('express');
const router = express();
const path = require('path');

router.get("/", (req,res) => {
    res.render("index", {
       title: "Node Pug",
       h1: "Hello pug!",
       name: "Bill"
   });
})

// router.get("/",(req,res) =>{
//     res.sendFile(path.join(__dirname, "../" ,"views", "index.pug"));
// })
module.exports = router;