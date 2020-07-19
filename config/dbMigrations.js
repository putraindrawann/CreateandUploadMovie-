const connection = require('./dbConn');
const SysUser = require('../src/models/user.model');
const bcrypt = require('bcryptjs');

async function migration() {
    
    await connection.sync({force: true});
    

    var passwordHash1 = bcrypt.hashSync('awan', 4);
    let user01 = await SysUser.create(
        {userName: 'awan', userPassword: passwordHash1, fullName: 'awan', email: 'awan@example.com'});
    
    var passwordHash2 = bcrypt.hashSync('putra', 5);
    let user02 = await SysUser.create(
        {userName: 'putra', userPassword: passwordHash2, fullName: 'putra', email: 'putra@example.com'});
}

migration();