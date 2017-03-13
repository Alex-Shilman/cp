import Base from './Base';

export default class UserApi extends Base {
    signup(params, query){
        debugger;
        return this.apiClient.post(`auth/signup`, params);
    }
}