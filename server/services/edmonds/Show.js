import Base     from '../Base';
import redis    from 'redis';

const redisClient = redis.createClient();


export default class Show extends Base {
    execute(data){
        return this._findReviews(data);
    }

    async _findReviews(data){
        const carData = [];
        const audiKey = 'edmonds:audi:a3:2015';
        return await new Promise((resolve, reject) => {
            redisClient.get(`${audiKey}:editorial`, ( err, carReview) => {
                redisClient.get(`${audiKey}:media`, (err,  carMedia) => {
                    carReview = JSON.parse(carReview);
                    carReview.media = JSON.parse(carMedia);
                    resolve([carReview]);
                });
                //console.log('data', data);

            });
        });
        //const _data = await redisClient.get(`edmonds:audi:a3:2015:editorial`);
        //console.log('_data', JSON.parse(_data));
        //return _data;
    }


}