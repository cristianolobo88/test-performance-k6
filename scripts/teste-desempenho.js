import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '10s', target: 10 }, // Simula 10 usuários durante 10 segundos
    { duration: '30s', target: 20 }, // Aumenta para 20 usuários durante 30 segundos
    { duration: '20s', target: 0 },  // Reduz para 0 usuários durante 20 segundos
  ],
};

export default function () {
  // Substitua 'SEU_TOKEN_AQUI' pelo token real
  let token = '';
  
  // Defina os headers com o token
  let headers = {
    Authorization: `Bearer ${token}`,
  };
  
  const response = http.get('', { headers: headers });
  console.log(`Response status: ${response.status}`);
  sleep(1);
}