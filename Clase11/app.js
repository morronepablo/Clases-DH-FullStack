const express = require('express');
const path = require('path');
const app = express();

//app.use(express.static('public'));
app.use(express.static(path.resolve(__dirname, "./public")));


app.listen(3000, () => {
    console.log("Levantando un servidor con Express en ", "http://localhost:3000");
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

