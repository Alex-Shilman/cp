const renderPromise = (req, res, promise) => {
    console.log('Outside renderPromise');
    return promise.then(data => {
        console.log('Inside renderPromise', data);
        return res.json({cars: data, status: 1 });
    }).catch(error => {
        console.error('REQUEST URL ',    req.url);
        console.error('REQUEST PARAMS ', req.params);
        console.error('REQUEST BODY ',   req.body);
        console.error('ERROR ',          error.stack);
        console.error('----------------------------');

        res.status(500).json({
            status:0,
            error:{
                code: 'UNKNOWN_ERROR',
                message: 'Please contact your system admin'
            }
        });
    });
}

export default renderPromise;