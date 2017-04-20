module.exports ={
    port:"4000",
    databases: {
        mongodb: "mongodb://localhost:27017/local"
    },

facebookAuth : {
        'clientID'        : '655127561343059', // your App ID
        'clientSecret'    : 'c545777c32dff66842cab352ccad7a86', // your App Secret
        'callbackURL'     : 'http://localhost:4000/login/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'

    },
};
