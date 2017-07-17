import axios from 'axios';

export default function loginUser(payload){
  return axios.post('/users/login',payload.toJS(),
      {
          baseURL: 'http://localhost:3000/api',
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          timeout: 1000,
  });
}
