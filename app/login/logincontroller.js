var loginCtrl = {};

loginCtrl.getLoginPage = function (req, res) {
    res.render("login/login",{title:"LoginPage",username:"konathamvenkat"});
};

loginCtrl.authenticateUser = function (req, res) {
    res.send("<h1>User authentictated</h1>");
};

module.exports=loginCtrl;
