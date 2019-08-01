var connection=require('./../config');

module.exports.login=function(req,res){
  var email=req.body.email;
  var password=req.body.password;



connection.query(`SELECT * FROM USER WHERE email=?`,[email],function(err,results,field){


   
    if(password===results[0].password)
    {
       res.render('./../views/userdesk.ejs', {data:results});

       console.log(results);
    }


});
}
