var connection=require('./../config');

module.exports.register=function(req,res){
  var user={
    'username':req.body.username,
    'email':req.body.email,
    'password':req.body.password,
    'mobile':req.body.mobile
  };
  connection.query(`INSERT INTO USER SET ?`,user,function(err,results,fields){
 if(err) throw err;
  });
res.render('./../views/index2.ejs')
};
