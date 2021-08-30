const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const fs = require('fs')
const cors = require('cors')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json({ limit: '500MB' }))

app.post('/', upload.single('img1file'), (req, res) => {
    const { input } = req.body
    let base64Data = null
    if (input.img1file) {
        let imgPath = `./uploads/${input.img1}`
        base64Data = input.img1file.replace(/^data:image\/jpeg;base64,/, "");
        fs.writeFile(imgPath, base64Data, 'base64', function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('img upload success')
            }
        });
    }
    if (input.img2file) {
        let imgPath = `./uploads/${input.img2}`
        base64Data = input.img2file.replace(/^data:image\/jpeg;base64,/, "");
        fs.writeFile(imgPath, base64Data, 'base64', function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('img upload success')
            }
        });
    }
    if (input.img3file) {
        let imgPath = `./uploads/${input.img3}`
        base64Data = input.img3file.replace(/^data:image\/jpeg;base64,/, "");
        fs.writeFile(imgPath, base64Data, 'base64', function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('img upload success')
            }
        });
    }
    return res.send({ message: 'Added' })
        .status(200)
        .end()
})

app.listen(5000, () => console.log('server is 5000'))