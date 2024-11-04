const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(proncess.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopography: true,  
}).then(() => {
    console.log('connected to mongodb');
}).catch(err => {
    console.error('Error connecting to Mongo:', err);
});

app.get('/', (req, res) => {
    res.send('server is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("now running server on http://localhost:${PORT}");
});
