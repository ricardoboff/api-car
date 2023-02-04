const db = require('../infra/connection');
const { ulid } = require('ulid')

class Vehicle {
    
    create(data, callback) {
        const { placa, marca, modelo, cor, ano } = data;
        const sql = `INSERT INTO vehicles (id, placa, marca, modelo, cor, ano) 
                     VALUES ('${ulid()}', '${placa}', '${marca}', '${modelo}', '${cor}', '${ano}')`;
    db.run(sql, callback);
    }

    findall(filters, callback) {
        if (Object.values(filters) != '') {
            const sql = `SELECT * FROM vehicles WHERE ${Object.keys(filters)} = '${Object.values(filters)}'`;
            db.all(sql, callback);  
        } else {
            const sql = "SELECT * FROM vehicles";
            db.all(sql, callback);
        }

    }

    findId(id, callback) {
         const sql = `SELECT * FROM vehicles WHERE id = '${id}'`;
         db.get(sql, callback);
    }

    deleteOne(id, callback) {
        const sql = `DELETE FROM vehicles WHERE id = '${id}'`;
        db.run(sql, callback);
    }

    updatePartial(id, data, callback) {
        let vehicleData = Object.entries(data);
        let fields = [];
        for (let i = 0; i < vehicleData.length; i++) {
            fields.push(`${vehicleData[i][0]} = '${vehicleData[i][1]}'`);
        }
        const sql = `UPDATE vehicles SET ${fields.join(',')}
                    WHERE id = '${id}'`;
        db.run(sql, callback);
    }
    
}

module.exports = new Vehicle();