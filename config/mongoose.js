// const mongoose=require('mongoose');//requrie  the library

// mongoose.connect('mongodb://localhost/contact_list_db'); //mongoose connect to the database
// const db=mongoose.connection;// accessing the database and check that the connection is successful or not
// db.on('error',console.error.bind(console,'error connecting to the db'));//error
// db.once('open',function(){//up and run
// console.log("sucessfully connected to the database");
// });

//require the library
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/contact_list_db');

//db as the database.
const db = mongoose.connection;

//error
db.on('error', function(err) { console.log(err.message); });

//up and running then print the message
db.once('open', function() {
  
    console.log("Successfully connected to the database");

});