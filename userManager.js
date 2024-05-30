
const {save, load} = require("./userDB")


    
async function login(username, password) {
    let dbUser = await load();

    console.log(dbUser)

    if (dbUser.username == username && dbUser.password == password) {
        //Login good
        this.currentUser = dbUser;
        return true;
    }
    return false;
}

module.exports = { login };