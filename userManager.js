class UserManager {

    constructor(userDB) {
        this.userDB = userDB
    }
    
    async login(id, username, password) {
        let fetchedUser = await this.userDB.load(id);

        console.log(fetchedUser)

        if (fetchedUser.username == username && fetchedUser.password == password) {
            //Login good
            this.currentUser = fetchedUser;
            return true;
        }
        return false;
    }

    async saveNewUser(user) {
        // kontrollera user
        if (user != null) {
            let fetchedUser = await this.userDB.load(user.id);
            
            if (fetchedUser.id == user.id) {
                //User finns redan
                return "User finns redan"
            }
            
            let result = await this.userDB.save(user)
            return result
        }
        return "Ingen User"
    }
}

module.exports = UserManager