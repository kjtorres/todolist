const mongoose = require("mongoose")

mongoose.connect(`mongodb://${process.env.DB_DEV_HOST}:${process.env.DB_DEV_PORT}/${process.env.DB_DEV_DATABASE}`)
    .then(()=> console.log("Connected"))
    .catch((err) => console.log(err))