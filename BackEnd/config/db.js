const mongoose = require("mongoose");

const connectedDB = async () => {
try {
await mongoose.connectedDB.connect(process.env.MONGO_URL);
console.log("DB is Connected");
}catch (error) {
console.log(error);
}

};

module.exports = connectedDB;