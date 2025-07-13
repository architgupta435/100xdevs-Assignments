const express=require("express");
const app=express();
let count=0;

function middlewarelogger(req,res,next){
  console.log("Method:"+req.method);
  console.log("URL:"+req.url);
  next();
}
app.get("/sum",middlewarelogger,function(req,res){

        count=count+1;
  console.log("No of user visited-->"+count);
  const a=req.query.a;
  const b=req.query.b;
  const sum=a+b;
  res.json({
    "ans":sum
  });
});
app.listen(3000);