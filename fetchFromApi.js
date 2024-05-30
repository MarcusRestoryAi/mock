const axios = require('axios');

async function fetchFromAPI() {
    try {
        const response = await axios.get("whatever")
        return response.data
    } catch (error) {
        console.error('Error fetching data from API:', error);
        throw error;
    }
}

module.exports = fetchFromAPI