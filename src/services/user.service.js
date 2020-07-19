const logEvent = require('../events/myEmitter');
const User = require('../models/user.model');


class UserServ {
    async getAllUser() {
        let result
        try {
            result = await User.findAll();
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-USER-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }

    async addUser(body) {
        let result
        try {
            let check = await User.findAll({where:{userName:body.userName}});
            console.log(check.length)
            if(check.length > 0){
                result = "Username telah digunakan";
            }else{
                result = await User.create(body)
            }
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'ADD-USER-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }

    async updateUser(body,id) {
        let result;
        try {
            result = await User.update({ userName: body.userName }, { where: { id: id } })
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'UPDATE-USER-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result
    }

    async deleteOneUser(params) {
        let result;
        try {
            result = await User.destroy({ where: { userName:params } })
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'DELETE-USER-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }
}

module.exports = UserServ