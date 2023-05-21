const mongoose  = require('mongoose');
mongoose.set('strictQuery', true);

const connectToMongo = ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/inotebook',()=>{
        console.log("connected to mongo successfully")
    })
}
const mongoURI = "mongodb://localhost:27017/"

module.exports = connectToMongo