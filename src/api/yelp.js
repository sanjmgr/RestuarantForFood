import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer UYgnKLrsptsy0uoQPoQQzcOvFNduyy8kH36qjDd5flPgmtntd5O0Ux3q85QV6XSME4rYGWsxVciYxxYrE0XAL8zhW4zhbgiVTFJEQQg6CaDD2w48f50hwiS0UzoXXnYx'
    }
})