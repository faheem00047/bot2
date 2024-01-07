const fs = require("fs");
const login = require("neha_khan");

var credentials = {email: "FB_EMAIL", password: "FB_PASSWORD"}; // credential information

login(credentials, (err, api) => {
    if(err) return console.error(err);
    // login
    fs.writeFileSync('appstate.json', JSON.stringify(api.getAppState())); //create appstate
});
