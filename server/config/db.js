'use strict'
import mongoose from 'mongoose';
import config from '../../etc/server-config.json';

export default function () {
    const { db } = config;
    mongoose.connect(`mongodb:${db.host}:${db.port}/${db.name}`, function (err, res) {
        if (err) {
            console.log(`Error connecting to: mongodb ${err}`);
        } else {
            console.log('mongodb connected');
        }
    });
}