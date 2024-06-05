class UserDB {

    constructor(axios) {
        this.axios = axios
    }

    async save(user) {
        let resp = await this.axios.post(" ")
        return resp.data
    }

    async load(id) {
        let resp = await this.axios.get(" ")
        return resp.data
    }

}
module.exports = UserDB

/*

1. Connection string - IP, databse name, user, pass
2. open kopplingen
3. Skicka SQL commando
4. Stäng koppling
*/