const express = require("express")
const multer = require('multer');
const upload = multer();

let  app = express()
app.get('/hello', function (req, res) {
    res.send('hello world')
  });

app.post('/hello', upload.none(), (req, res) => {
    console.log('triggered)');
    const formData = req.body;
    console.log('form data', formData);
    res.send("hello how are you");
  });

app.use(express.static('public'));

app.listen(3000,  () => console.log("Example app listening on port 3000!"));



