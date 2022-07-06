// Dependencies
const mongoose = require('mongoose');


const dbConnection = async () => {

    try {
        await mongoose.connect("mongodb://127.0.0.1/test",
            // {
            //     useNewParser: true,
            //     useUnifiedTopology: true
            // }
        );

        console.log("Database Connected Successfully!!")
    } catch (error) {
        console.log(error);
    }
}


// mongoose
//     .connect("mongodb://127.0.0.1/test")
//     .then(() => console.log("Database Connected Successfully!!"))
//     .catch((error) => {
//         console.log(error);
//     })



// Module Export
module.exports = dbConnection;