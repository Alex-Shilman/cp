'use strict'
import mongoose from 'mongoose';
import config from '../../etc/server-config.json';

export default function () {
    mongoose.connect('mongodb://127.0.0.1:27017/carPatron', function (err, res) {
        if (err) {
            console.log(`Error connecting to: mongodb ${err}`);
        } else {
            console.log('mongodb connected');
        }
    });
}