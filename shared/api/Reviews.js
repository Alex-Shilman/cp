import Base from './Base';

export default class ReviewsApi extends Base {
    show(params, query){
        debugger;
        return this.apiClient.get(`edmonds/reviews`, {}, query);
    }
}