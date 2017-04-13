const redis         = require('redis');
const _             = require('lodash');
const axios         = require('axios');
const qs            = require('query-string');
const client_config = require('../../../etc/client-config.json');

const edmonds = client_config.edmonds;
const redisClient = redis.createClient();

console.log('Args', process.argv);
process.on('message', msg => {
    switch (msg.type){
        case 'editorials':
            const editorialKey = `edmonds:${msg.params.make}:${msg.params.model}:${msg.params.year}:editorial`;
            const editorialParams = Object.assign(msg.params, { api_key: edmonds.api_key });
            const editorialUrl = `${edmonds.url}${edmonds.apis.editorial.relative_url}/${msg.params.make}/${msg.params.model}/${msg.params.year}?${qs.stringify(editorialParams)}`;
            setEdmondsData(editorialKey, editorialUrl);
            break;

        case 'media':
            const mediaKey = `edmonds:${msg.params.make}:${msg.params.model}:${msg.params.year}:media`;
            const mediaParams = Object.assign(msg.params, { api_key: edmonds.api_key });
            const mediaUrl = `${edmonds.url}${edmonds.apis.media.relative_url}/${msg.params.make}/${msg.params.model}/${msg.params.year}/photos?${qs.stringify(mediaParams)}`;
            setEdmondsData(mediaKey, mediaUrl);
            break;

        default:
            console.log('type does not exist');



    }
})

function setEdmondsData(key, url){
    redisClient.get(key, (err, data) => {
        if (err || !data){
            console.log('calling url', url);
            axios.create({
                withCredentials: true
            }).get(url)
                .then( resp => {
                    redisClient.set(key, JSON.stringify(resp.data));
                    console.log('response', resp.data);
                }).catch( err => {
                console.log('error', err);
            });
        }else{
            console.log('has in cache');
            console.log('Here', data);
        }
    });
}






