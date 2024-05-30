const axios = require('axios')
const fetchFromAPI = require("./fetchFromApi")

jest.mock('axios')

describe("Fetching with Axios", () => {

    afterEach(() => {
        jest.clearAllMocks();
    })

    it("Fetch data", async () => {

        //Definiera mocad data
        let mockData = { name: 'iss', velocity: 20000, altitude: 35000}
        axios.get.mockResolvedValue({data: mockData});

        const response = await fetchFromAPI();
        console.log(response)

        expect(response.name).toBe("iss");
        expect(response.velocity).toBe(20000);

        expect(response).toEqual(mockData);

        expect(axios.get).toHaveBeenCalled();
        expect(axios.get).toHaveBeenCalledTimes(1);
        
    })

    it("Throwing an error", async () => {

        //Definiera mocad data
        let mockError = new Error("Invalid URL to API")
        axios.get.mockRejectedValue(mockError)

        await expect( fetchFromAPI()).rejects.toThrow(mockError);

        expect(axios.get).toHaveBeenCalled();
        expect(axios.get).toHaveBeenCalledTimes(1);
    })

})