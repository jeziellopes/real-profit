import axios from 'axios';

const api = axios.create({
  baseURL: 'https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=10&toTs=1553213497',
});

export default api;
