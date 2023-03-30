const { postProductService, getProductService } = require("../services/addProductService");

exports.getproduct = async (req, res, next) => {

    try {
        const query = req.query;
        const result = await getProductService(query);
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

exports.postProduct = async (req, res, next) => {

    try {
        const data = req.body;
        const result = await postProductService(data);
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