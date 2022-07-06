// Dependencies
const express = require('express');
const dbConnection = require('./db/db');
const PeopleModel = require('./models/peopleModel');



// App Initialize
const app = express();



// Middleware
app.use(express.json());



app.get('/', (req, res) => {
    res.send("Hello Public!!")
})



// Callback way
app.post('/people-cb', (req, res) => {
    const people = new PeopleModel(req.body);
    people.save((err, result) => {

        if (err) {
            res.status(500).send(err);
        } else {
            res.send(result);
        }
    });
})



// Async Way
app.get('/people', async (req, res) => {
    try {
        const result = await PeopleModel.find({});
        res.json(result);
    } catch (error) {
        res.status(500).send(error);
    }
})




app.post('/people', async (req, res) => {
    try {
        const result = await PeopleModel.insertMany(req.body);
        res.send(result)
    } catch (error) {
        res.status(500).send(error);
    }
})




// Server Listening
app.listen(3000, () => {
    dbConnection().catch(err => console.log(err));
    console.log("Server have been running on port" + " " + 3000);
})