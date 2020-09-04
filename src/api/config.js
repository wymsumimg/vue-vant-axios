import domainsFuc from './domains'
import originAxios from 'axios'
import {TokenKeys} from '@/utils/variable'
// import Qs from "qs"
let setAxios = originAxios.create({
  baseURL: domainsFuc(TokenKeys.PRODUCT_ENV).domain,
  // baseURL: 'http://192.168.21.111:8017/APi/',
  timeout: 20000, // request timeout
  // transformRequest: [
  //   function(data) {
  //     return Qs.stringify(data);
  //   }
  // ],
  // headers: { "X-Requested-With": "XMLHttpRequest" }
});
export default setAxios
