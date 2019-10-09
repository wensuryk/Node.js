const express = require('express');
const router = express();
const path = require('path');

router.get("/", (req,res) => {
    res.render("index", {
       title: "Node Pug",
       h4: "Get started with online courses",
       p: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiu"
   });
})

// router.get("/",(req,res) =>{
//     res.sendFile(path.join(__dirname, "../" ,"views", "index.html"));
// })
module.exports = router;