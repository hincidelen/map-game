// Constants.js
const prod = {
    url: {
        API_HOST: 'https://myapp.herokuapp.com',
        API_URL_USERS: 'https://myapp.herokuapp.com/users'
    }
};
const dev = {
    url: {
        API_HOST:'http://localhost:3000'
    }
};
export const config = process.env.NODE_ENV === 'development'? dev : prod;
