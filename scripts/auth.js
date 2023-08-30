import http from 'k6/http';

export function getToken() {
  const url = 'https://api.staging.base.cropwise.com/oauth/token';
  const payload = {
    username: 'protectortest@syngenta.com',
    password: 'protector@123',
  };

  const response = http.post(url, payload);
  const responseBody = JSON.parse(response.access_token);

  return responseBody.token; // Retorne o token obtido
}