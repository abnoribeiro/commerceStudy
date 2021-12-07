import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gist.githubusercontent.com/abnoribeiro/c3fa5150e659b91c52861f4367b71297/raw/7931834828a30689ffc7ba2a78fead64999a1331',
});

export default api;
