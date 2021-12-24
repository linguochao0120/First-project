import { get,getAwait} from './http'

//登录
export function getLogin(username,password){
	return get('/getLogin',username,password)
}
//home页面表格信息
export  function getUserInfo(param){
	return getAwait('/getUser',param)
}
