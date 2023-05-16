module.exports = {
    sayHello: {
        frequency: "* * * * *",
        handler: "handlers/sayHello"
    },
    sayGoodbye: {
        frequency: "55 * * * *",
        handler: "handlers/sayGoodbye"
    }
};

// frequency: Tần số thực hiện sau khoảng thời gian chỉ định
// handler: Thực thi 1 chức năng  gì đó