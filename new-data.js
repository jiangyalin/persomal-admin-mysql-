const User = require('./models/user');

(async () => {
    await User.create({
        name: 'aaa',
        password: '21212'
    });
})();

// let user = User.build({
//     name: 'admin',
//     password: '21212'
// });
//
// user.save();

// User.create({
//     name: 'admin',
//     password: '21212'
// }).then(function (p) {
//     console.log('created.' + JSON.stringify(p));
// }).catch(function (err) {
//     console.log('failed:' + err);
// });