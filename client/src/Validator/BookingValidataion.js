const Validator = require('validator');
const isEmpty =require('./isEmpty');

module.exports = function BookingValidation(data)
{
    let errors={};
    data.datetotravel=!isEmpty(data.datetotravel)?data.datetotravel:'';
    data.estimatedtime=!isEmpty(data.estimatedtime)?data.estimatedtime:'';
     data.chargingduration=!isEmpty(data.chargingduration)?data.chargingduration:'';
    if(Validator.isEmpty(data.datetotravel))
    errors.datetotravel="Please enter your datetotravel!";
    if(Validator.isEmpty(data.estimatedtime))
    errors.estimatedtime="Please enter your estimatedtime!";
    if(Validator.isEmpty(data.chargingduration))
    errors.chargingduration="Please enter your chargingduration!";
    return {
        errors,
        isValid:isEmpty(errors)
    }
}