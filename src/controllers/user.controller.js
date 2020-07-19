const userAuthentication = async (req, res, service) => {
    try {
        const user = req.body;
        const userInfo = await service.authenticate(user);
        if (userInfo) {
            res.send(userInfo);
        } else {
            res.sendStatus(401);
        }

    } catch (e) {
        res.sendStatus(500);
    }
};

const getallUser = async (req,res,service)=>{
    try {
        const user = await service.getAllUser()
        res.send(user)
    } catch (e) {
        res.sendStatus(500)
    }
}

const addNewUser = async(req,res,service)=>{
    try {
        const body = req.body;
        const user = await service.addUser(body)
        res.send(user)
    } catch (e) {
        res.sendStatus(500);
    }
}

const updateOneUser  = async(req,res,service)=>{
    try {
        const id = req.query.id;
        const body = req.body;
        const user = await service.updateUser(body,id);
        res.send(user)
    } catch (e) {
        res.sendStatus(500)
    }
}

const deleteOneUser = async(req,res,service)=>{
    const userName = req.query.userName;
    await service.deleteOneUser(userName);
    res.send({ userName: userName })
}

module.exports = {
    userAuthentication,getallUser,addNewUser,updateOneUser,deleteOneUser
};