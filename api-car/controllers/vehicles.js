const vehiclesrv = require('../useCases/vehicles');

class VehicleCtrl {

    async getAll(req, res) {
        const filters = req.query;

        await vehiclesrv.getAll(filters, (err, data) => {
            if (data) {
            res.status(200).json(data);
            } else {
                res.status(404).json({ ErrMsg: 'Vehicle not found'})
                }
            });
    }

    async getId(req, res) {
        const { id } = req.params;

        await vehiclesrv.getId(id, (err,data) => {
            if (data) {
            res.status(200).json(data);
            } else {
                res.status(404).json({ ErrMsg: 'Vehicle not found'})
                }
        });
    }

    async create(req, res) {

        await vehiclesrv.createOne(req.body, (err, data) => {
            if (err) {
                res.status(400).send(`${err} Vehicle not Insert`);
            } else res.status(201).send(`Vehicle Insert...`);
        });
    }

    async update(req, res) {
        const { id } = req.params;

        await vehiclesrv.changeOne(id, req.body, (err) => {
            if (err) {
                res.status(400).send(`${err} Vehicle not Change`);
            } else res.status(201).send(`Vehicle Change...`);
        });

    }

    async remove(req, res) {
        const { id } = req.params;
        
        await vehiclesrv.removeOne(id, (err) => {
            if (err) {
                res.status(400).send(`${err} Vehicle not Remove`);
            } else {
                res.status(200).send(`Vehicle Remove`);
            }
        })
    }
}

module.exports = new VehicleCtrl;
