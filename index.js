let express = require("express");
let app = express();
let bodyParser = require("body-parser")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

let auth = require('http-auth');
let basic = auth.basic({
    realm: "Simon Area.",
    file: "./.htpasswd"
});

app.use('/', express.static('./'));

app.post('/auth', function(req, res) {
    let text = req.body.text;
    console.log(text);
});

app.get('/private', auth.connect(basic), (req, res) => {
    res.send(`Hello from admin area!`);
});

app.listen(2121, function() {
    console.log('Server listening on port 2121!');
});