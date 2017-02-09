import Base          from './Base';
import renderPromise from '../render';

export default class Cars extends Base {
    show(req, res){
        const params  = { ageId: req.params.ageId, ...req.query };
        const promise = this.run('cars/Show', { params });
        renderPromise(req, res,  promise);


    }
}