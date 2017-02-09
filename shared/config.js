module.exports = (process.env.BROWSER)
            ? window.__CONFIG__
            : require('../etc/client-config.json');