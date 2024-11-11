const express = require('express');
const mongoose = require('mongoose');
const app = express();
const productRoute = require('./routes/product.route.js');
app.use(express.json());

app.use("/api/products",productRoute);





app.get('/', (req, res) => {
    res.send('Hello from NODE API ');
});



mongoose.connect("mongodb+srv://arghaunibit:wrJOnZWG7pv07se6@crud-app.hxnt4.mongodb.net/NODE-API?retryWrites=true&w=majority&appName=CRUD-APP")
.then(() =>{
    console.log('Connected to MongoDB');
})
.catch(()=> {
    console.log('Failed to connect to MongoDB');
})

app.listen(8000, ()=> {
    console.log('Server is running on port 8000');
})