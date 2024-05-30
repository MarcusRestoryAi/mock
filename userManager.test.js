const axios = require('axios')
const User = require("./user")
const { login } = require("./userManager")

jest.mock('axios')

describe("UserManager", () => {

    it("Logga in som User", async () => {

        const mockData = { username: 'marcus', password: 'abc'};
        axios.get.mockResolvedValue({data: mockData});
        /*
        MockUserDB.mockImplementation(() => {
            Promise.resolve(mockData)
        })
        */

        let result = await login('marcus', 'abc');

        console.log(result);

        expect(result).toBe(true);

    })
})