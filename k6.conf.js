export default {
    stages: [
      { duration: '10s', target: 10 }, // Simula 10 usuários durante 10 segundos
      { duration: '30s', target: 20 }, // Aumenta para 20 usuários durante 30 segundos
      { duration: '20s', target: 0 },  // Reduz para 0 usuários durante 20 segundos
    ],
  };
  