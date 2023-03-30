const { getBookingService, postBookingService, putBookingService, deleteBookingService } = require("../services/BookingService");

exports.getbooking = async (req, res, next) => {

    try {
        const query = req.query;
        const result = await getBookingService(query);
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

exports.postbooking = async (req, res, next) => {

    try {
        const data = req.body;
        const result = await postBookingService(data);
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

exports.putbooking = async (req, res, next) => {

    try {
        const data = req.body;
        const result = await putBookingService(data);
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
exports.deletebooking = async (req, res, next) => {

    try {
        const data = req.params;
        const result = await deleteBookingService(data);
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