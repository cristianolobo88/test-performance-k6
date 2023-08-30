import http from 'k6/http';
import { sleep } from 'k6';
import { getToken } from './auth.js';

export let options = {
  stages: [
    { duration: '10s', target: 1 }, 
  ],
};

export default function () {
  let token =''; 

  let headers = {
    Authorization: `Bearer ${token}`,
  };

  const response = http.get('https://api.staging.beta.protector.strider.ag/api/v1/products', { headers: headers });
  console.log(`Response status: ${response.status}`);
  sleep(1);
}