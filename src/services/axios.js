import axios from 'axios';

export default axios.create({
  baseURL: 'http://servicodados.ibge.gov.br/api/v3/noticias/',
});
