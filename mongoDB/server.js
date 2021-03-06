const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())

const connectionString = `mongodb+srv://jorlowski:eXec$246@cluster0.gqmyv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

MongoClient.connect(connectionString, {
        useUnifiedTopology: true
    })

    .then(client => {
        console.log("połączono z bazą danych")
        const db = client.db('bazadanych')
        const nazwaKolekcji = db.collection('nazwakolekcji')

        app.get("/", function (req, res) {
            res.sendFile(__dirname + '/index.html')
        })

        app.post("/someuserdata", (req, res) => {
            // console.log(`coś zostało wysłane`);
            console.log(req.body);
            nazwaKolekcji.insertOne(req.body)
                .then(result => console.log(result))
                .catch(error => console.log(error))
        })

        app.listen(port, (err) => {
            if (err) {
                return console.error(`Błąd: ${err}`)
            }
            console.log(`Aplikacja działa na porcie ${port}`)
        })
    })
    .catch(error => console.log("błąd połączenia"))