var userCtrl = require("./users.controller");
module.exports = function(app) {
    app.post("/api/users/create", userCtrl.create);
     app.post("/api/users/login",userCtrl.login);
    
};
