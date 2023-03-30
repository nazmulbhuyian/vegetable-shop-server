const { getAllBookingService } = require("../services/allBookingsService");

exports.getallBookings = async (req, res, next) => {

    try {
        const result = await getAllBookingService();
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