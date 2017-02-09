import Base     from '../Base';
import bluebird from 'bluebird';
var fsp = require('fs-extra-promise').usePromise(bluebird);

export default class Show extends Base{
    execute(data){
        return this._findOneCar(data);
    }

    async _findOneCar(data){
        console.log('DATA', data)
        const _car = await fsp.readFileAsync(`${__dirname}/cars.json`, 'utf8');
        const car = JSON.parse(_car);

        return {
            make : car.make,
            model: car.model,
            year : car.year
        }
    }
}