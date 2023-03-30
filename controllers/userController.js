const { postUserService, getUserService, putUserService, deleteUserService, getAdminService, getSellerService } = require("../services/userService");


exports.postUser = async (req, res, next) => {

    try {
        const data = req.body;
        const result = await postUserService(data);
        if (!result) {
            return res.send('nothing post');
        }
        res.status(200).json({
            status: 'Successfully',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "Data post Failed",
            error: error.message
        })
    }
}

exports.getUser = async (req, res, next) => {

    try {
        const result = await getUserService();
        if (!result) {
            return res.send('nothing found');
        }
        res.status(200).json({
            status: 'Successfully',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "Data query Failed",
            error: error.message
        })
    }
}

exports.putUser = async (req, res, next) => {

    try {
        const id = req.params.id;
        const result = await putUserService(id);
        if (!result) {
            return res.send('nothing found');
        }
        res.status(200).json({
            status: 'Successfully',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "Data query Failed",
            error: error.message
        })
    }
}

exports.deleteUser = async (req, res, next) => {

    try {
        const id = req.params.id;
        const result = await deleteUserService(id);
        if (!result) {
            return res.send('nothing found');
        }
        res.status(200).json({
            status: 'Successfully',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "Data query Failed",
            error: error.message
        })
    }
}

exports.getUserAdmin = async (req, res, next) => {
    const email = req.params.email
    try {
        const result = await getAdminService(email);
        if (!result) {
            return res.send('nothing found');
        }
        res.status(200).send(result)
    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "Data query Failed",
            error: error.message
        })
    }
}

exports.getUserSeller = async (req, res, next) => {
    const email = req.params.email
    try {
        const result = await getSellerService(email);
        if (!result) {
            return res.send('nothing found');
        }
        res.status(200).send(result)
    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "Data query Failed",
            error: error.message
        })
    }
}