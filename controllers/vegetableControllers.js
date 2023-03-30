
const { getVegetableService } = require("../services/vegetableServices");


exports.getVegetable = async(req, res, next) =>{

    try {
      const result = await getVegetableService();
      if(!result){
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