module.exports=function(app){
    app.get("/",function(req,res){
     res.send("<h1> welcome node.js</h1>");
    
    });
};