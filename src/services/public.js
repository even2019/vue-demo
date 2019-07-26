// 公共相关接口
import fetch from '@/plugins/axios';

// 登录接口
export const Login = params => fetch.post('/login', params);
