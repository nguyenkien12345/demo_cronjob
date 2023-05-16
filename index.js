const express = require('express');
const mongoose = require('mongoose');
const account = require('./models/account');
const cron = require('./cron');

const app = express();

mongoose.connect('mongodb+srv://nguyentrungkien:nguyentrungkien@cluster0.ag08y0r.mongodb.net/NguyenTrungKien', function (err) {
    if (!err) {
        console.log(`Connect database success`);
    }
    else {
        console.log(`Connect database fail: ${err}`);
    }
}
);

app.get('/', (req, res) => {
    return res.json({
        status: true,
        message: 'Nguyen Trung Kien Vs Mai Thi Thanh Thuy'
    });
});

app.get('/nguyentrungkien', (req, res) => {
    return res.json({
        status: true,
        message: 'Nguyen Trung Kien'
    });
});

app.get('/maithithanhthuy', (req, res) => {
    return res.json({
        status: true,
        message: 'MaiThiThanhThuy'
    });
});

// const createUser = async () => {
//     const newAccount = new account({ username: 'Nguyen Minh Do', email: 'do243960@gmail.com' });
//     await newAccount.save()
//         .then((data) => console.log('save account success'))
//         .catch((error) => console.log('save account fail'));
// };

// createUser();

app.listen(3000, () => {
    console.log('Port is running at PORT 3000');
    cron.sendEmailToAllUser();
})
