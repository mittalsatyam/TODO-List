// const express = require('express'); //INDEX VALI FILE FETCHING THE INFORMATION AND SHOWN IN THE BROWSER.
// const path=require('path');
// const port = 8000;
// const db=require('./config/mongoose');// access the database
// const Contact = require('./models/contact');//create entries and collection to be populated
// const app = express(); // this app have all functionality which are neded to run a server.
// app.set('view engine','ejs');//which engize we use
// app.set('views',path.join(__dirname,'views'))//pat of views
// app.use(express.urlencoded());//convert the data in req,body and key and value pair.use only for form data




// // app.get('/', function(req, res){ // router  .. function() is callback function.
// //     res.send('<h1>Cool, it is running! or is it?</h1>');
// // })

//  app.use(express.static('assets'));//middleware for the css file
// // app.get('/practice',function(req,res){
// //     return res.render('practice',{title:"I am growing"});
// // });


//  var contactList=[{
//     name:'satyam',
//     phone:'9870676325'
//  },{
//  name:'Addy',
//  phone:'9927863044'
//  },{
//  name:'Micheal_Phelps',
//  phone:'11234567890'}
//  ]
//  app.get('/', function(req, res){ 
//     // console.log(__dirname);
//     // // console.log(req)// router  .. function() is callback function.
//     // res.send('<h1>Cool cool, it is running! or is it?</h1>');//send to the browser
//     Contact.find({},function(err,contact){
//      if(err){
//          console.log('error in fetching the contact');
//          return;
//      }
//      return res.render('home',{
//         title:"My contact List",
//         contact_list:contact // this is the communication between your server and browser
//     });
//  });
// });
// app.post('./delete-contact',function(req,res){
// let id=req.body.id;
// Contact.findByIdAndDelete(id,function(err){
// if(err){
//     console.log("errorn in delete the id");
//     return;
// }
// return res.redirect('back');
// });
// });
// app.post('/create-contact', function(req, res){
//     Contact.create({   // create the function by dynamically create the contact with help of mongodb
//         name: req.body.name,
//         phone: req.body.phone
//     }, function(err, newContact){ //callback function
//         if(err){
//             console.log('Error in creating a contact!');
//             return;
//         }
//             console.log('******', newContact);
//             return res.redirect('back');
//     });
// });


// app.listen(port, function(err){
//     if (err) {
//         console.log("Error in running the server", err);
//     }
//     console.log('Yup!My Server is running on Port', port);
// })
// // app.get('/delete-contact/', function(req, res){
// //     console.log(req.query);//req.query IT IS AN Object  express is reading it
// //     let phone = req.query.phone

// //     // let contactindex = contactList.findIndex(contact => contact.phone == phone);

// //     // if(contactindex != -1){
// //     //     contactList.splice(contactindex, 1);
// //     // }

// //     // return res.redirect('back');
// //     let contactindex=contactList.findIndex(contact => phone==contact.phone);
// //     if(contactindex!=-1){
// //       contactList.splice(contactindex,1);
// //     }
// //     return res.redirect('back');
// // });
// app.get('/delete-contact/', function(req, res){
//        // console.log(req.query);
//        let id = req.query.id
    
//       Contact.findOneAndDelete(id, function(err){
//         if(err){
//            console.log('error in deleting the object');
//              return;
//          }
//            return res.redirect('back');
//        })
    
    
       
//      });



const express = require('express');
const path = require('path');
const port = 8000;

const db = require('./config/mongoose');
const Contact = require('./models/contact');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));//middleware


var contactList = [
    {
        name: "Arpan",
        phone: "1111111111"
    },
    {
        name: "Tony Stark",
        phone: "1234567890"
    },
    {
        name: "Coding Ninjas",
        phone: "12131321321"
    }
]

app.get('/practice', function(req, res){
    return res.render('practice', {
        title: "Let us play with ejs"
    });
});


app.get('/', function(req, res){

    Contact.find({}, function(err, contacts){
        if(err){
            console.log("error in fetching contacts from db");
            return;
        }
        return res.render('home',{
            title: "Contact List",
            contact_list: contacts
        });

    })
  
})
app.post('/create-contact', function(req, res){
    
    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    }, function(err, newContact){
        if(err){console.log('Error in creating a contact!')
            return;}
            console.log('******', newContact);
            return res.redirect('back');
    })
  

});

app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
})


app.get('/delete-contact/', function(req, res){
    console.log(req.query.id);
    let id = req.query.id ;
    
    // Contact.findOneAndDelete({_id:id}, function(err){
        Contact.findByIdAndDelete(id, function(err){
        if(err){
            console.log('error in deleting the object');
            return;
        }
        return res.redirect('back');
    })


   
});