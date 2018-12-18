import axios from 'axios';
// import userInfo from '../store/getters/userInfo'
let host = 'http://127.0.0.1:8000';

//注册
export const register = parmas => { return axios.post(`${host}/users/`, parmas) }
//登录
export const login = params => {
  return axios.post(`${host}/login/`, params)
}
// 获取home页面内容
// export const homeList = params => {return axios.get(`${host}/home`, params)}
// 获取softwareList
export const fetchSoftware = params => {return axios.get(`${host}/softwares`, params)}
// 获取programList
export const fetchProgram = params => {return axios.get(`${host}/program`, params)}
// 获取experienceList
export const Experience = params => {return axios.get(`${host}/experience`, params)}
export const uploadExperience = params => {return axios.post(`${host}/experience/`, params)}
export const Question = params => {return axios.get(`${host}/question`, params)}
// 获取开源讯息 
export const fetchOpensource = params => {return axios.get(`${host}/opensource`, params)}


