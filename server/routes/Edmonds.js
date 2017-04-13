import Base             from './Base';
import renderPromise    from '../render';

export default class Edmonds extends Base {
    show(req, res){
        const params = {make: 'audi', model: 'a3', year: '2000'};
        const promise = this.run('edmonds/Show', { params });
        renderPromise(req, res,  promise);
    }
}