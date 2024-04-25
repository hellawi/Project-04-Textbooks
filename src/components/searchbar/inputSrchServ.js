import axios from 'axios';

axios.defaults.baseURL =
  'https://fe-1y-8-book-catalog-api-production.up.railway.app/api';

export function inputSrchServ(query, page) {
  return axios.get(`/books`, {
    params: {
      query,
      page,
    },
  });
}
0;
