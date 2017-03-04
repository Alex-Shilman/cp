import Base     from '../Base';
import bluebird from 'bluebird';
var fsp = require('fs-extra-promise').usePromise(bluebird);

export default class Show extends Base{
    execute(data){
        return this._findOneCar(data);
    }

    async _findOneCar(data){
        //console.log('DATA', data)
        const _cars = await fsp.readFileAsync(`${__dirname}/cars.json`, 'utf8');
        //const cars = JSON.parse(_car);

        return JSON.parse(_cars);
    }
}