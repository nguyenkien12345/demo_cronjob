const cronJOB = require('node-cron');
const account = require('./models/account');
const sendMail = require('./config/sendEmail');

const sendEmailToAllUser = async () => {
    try {
        cronJOB.schedule('* * * * *', async () => {
            const accounts = await account.find();
            for (let i = 0; i < accounts.length; i++) {
                sendMail(accounts[i].email, `Tài khoản ${accounts[i].email} được gửi vào ${new Date(Date.now().toString())}`);
            }
        });
    }
    catch (error) {
        console.log(`Error when send email to all user: ${error}`);
    }
};

module.exports = { sendEmailToAllUser };
