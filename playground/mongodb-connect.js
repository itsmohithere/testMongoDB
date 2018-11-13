const MongoClient = require('mongodb').MongoClient;
// let {MongoClient} = require('mongodb');

// console.log(MongoClient);
// let user = {name:'Andrew', age:22};

// let {name} = user;

// console.log(name);

MongoClient.connect('mongodb://localhost:27017/CRM', {useNewUrlParser:true},(err, client)=> {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected');
  
  const db = client.db('TodosApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do ',
  //   completed: false
  // }, (err, result)=>{
  //   if (err) {
  //     return console.log("Unable to insert ", err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
   
  //   name:'Rohit Saxena',
  //   age:29,
  //   location:'New Delhi'
  // },(err, result) =>{
  //   if (err) {
  //     return console.log("Unable to inset", err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // })
  

  client.close();
});


  