import fetch from './request'



// 登录接口
export function employeeClientLogin(params) {
  return fetch.post('Employee/ClientLogin', params);
}

// export function SQL_data_Knowledge_isEnable_count_list(params){
//     return fetch.get('Chart/SQL_data_Knowledge_isEnable_count_list',{params});
// }