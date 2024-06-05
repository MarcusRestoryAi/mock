const axios = require('axios')
const User = require("./user")
const UserManager = require("./userManager")
const UserDB = require("./userDB")

jest.mock('axios')

describe("UserManager", () => {

    let mockData;
    let userManager;

    beforeEach( () => {
        //Setup
        mockData = new User("marcus", "abc", 1);

        //Skapa en UserDB
        let userDB = new UserDB(axios)

        //Skapa en UserManager
        userManager = new UserManager(userDB)
    })

    it("Logga in som User", async () => {
        /*
        MockUserDB.mockImplementation(() => {
            Promise.resolve(mockData)
        })
        */
        axios.get.mockResolvedValue({data: mockData});

        let result = await userManager.login(1, 'marcus', 'abc');

        console.log(result);

        expect(result).toBe(true);
        expect(userManager.currentUser.username).toBe('marcus')

    })

    it("Logga in med fel lösenord", async () => {
        axios.get.mockResolvedValue({data: mockData});

        let result = await userManager.login('marcus', '123')

        expect(result).toBeFalsy()
        expect(userManager.currentUser).toBeUndefined()
    })

    it("Spara en ny användare", async () => {
        axios.get.mockResolvedValue({data: new User(null, null, null)});
        
        axios.post.mockResolvedValue({data: "Ny User sparad successfully"});

        let result = await userManager.saveNewUser(mockData)

        expect(result).toBe("Ny User sparad successfully")
    })

    it("Spara en ny användare som redan finns", async () => {
        axios.get.mockResolvedValue({data: mockData});

        let result = await userManager.saveNewUser(mockData)

        expect(result).toBe("User finns redan")
    })

    it("Spara något som inte är en User", async () => {
        let result = await userManager.saveNewUser(null)

        expect(result).toBe("Ingen User")
    })
})