import axios from 'axios';

export default function logoutUser(parmas){

  return axios.post('/Users/logout',null,
      {
          baseURL: 'http://localhost:3000/api',
          method: 'post',
          params: parmas,
          headers: {'Content-Type': 'application/json'},
          timeout: 1000,
  });
}

