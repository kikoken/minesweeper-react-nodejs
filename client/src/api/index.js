import client from './axios';

const Api = client => ({
    getBoard: async () => await client({
        'method': 'GET',
        'url': '/api/v1/mineboard'
    })
})


export default Api(client)