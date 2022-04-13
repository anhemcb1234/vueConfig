import {Axios} from './Axios';

function getArticles(payload,pageId) {
   return Axios.get(`?q=${payload}&pageSize=10&page=${pageId}&from=2022-03-13&sortBy=publishedAt&apiKey=9f395695403c4ad08ded1cfaeec0aaab`);
}
export const homeServices = {
getArticles
};