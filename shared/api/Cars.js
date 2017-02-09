import Base from './Base';

export default class CarsApi extends Base{
    show(params, query){
        debugger;
        return this.apiClient.get(`cars/${params.oldnewId}`, {}, query);
    }
}