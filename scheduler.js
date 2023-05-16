const cron = require('node-cron');
const { resolve } = require('path');

const initCrons = (config) => {
    // Duyệt qua toàn bộ key của object 
    Object.keys(config).forEach((key) => {
        // Nếu mà frequency hợp lệ 
        if (cron.validate(config[key].frequency)) {
            cron.schedule(config[key].frequency, () => {
                const handler = require(resolve(config[key].handler));
                handler();
            })
        }
    })
};

module.exports = { initCrons };
