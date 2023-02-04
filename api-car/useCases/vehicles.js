const Vehicle = require('../dao/vehicle');

exports.createOne = (data, callback) => { 
    Vehicle.create(data, callback)
};

exports.changeOne = (id, data, callback) => { 
    Vehicle.updatePartial(id, data, callback)
};

exports.getAll = async (filters, callback) => {
    
    let vehicles = await Vehicle.findall(filters, callback)
    return vehicles;
    
};

exports.getId = (id, callback) => { 

    let vehicle = Vehicle.findId(id, callback)
    return vehicle;
};
 
exports.removeOne = (id, callback) => { 
    Vehicle.deleteOne(id, callback);
};