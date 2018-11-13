let {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/CRM', {useNewUrlParser:true},(err, client)=> {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected');
  
  const db = client.db('TodosApp');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5bea8990c990a152824a9b04')
  // }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('Error is ',err)
  // })

  db.collection('Todos').find().count().then((count)=>{
    console.log('Todos');
    console.log(`Todos count is ${count}`);
  },(err)=>{
    console.log('Error is ',err);
  })

  client.close();
});


  