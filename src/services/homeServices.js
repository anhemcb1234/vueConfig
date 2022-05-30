import {Axios} from './Axios';

function getArticles(payload) {
   return Axios.get(`?q=${payload}&from=2022-04-29&sortBy=publishedAt&apiKey=1f5210480a3d48d487a6e90bd780eadc`);
}
export const homeServices = {
getArticles
};