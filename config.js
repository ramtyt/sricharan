var mysql=require('mysql');

var connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'MRV99<3mysql',
  database:'music'
});

connection.connect(function(err){
  if (err)
  {
    console.log('error in connecting to the database');
  }
});
module.exports=connection;
