const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const router = require('express').Router();
mongoose.set('useFindAndModify', false);
let tableSchema = new Schema({
    _id:String,
    phone_name: String,
    company_name: String,
    img: String,
    details: String,
    price_num: Number,
    price_str: String
});
Tables = mongoose.model('dbtables', tableSchema);
router.get('/tables', (req, res, next) => {
    Tables.find({})
        .exec((err, tasks) => {
            console.log(tasks)
            if (err) res.status(400).send('err');
            else {
                res.status(200).json(tasks);
            }
        });
});

router.get('/tables/:id', (req, res, next) => {
    Tables.findOne(
        {
            _id: req.params.id
        }
    )
        .exec((err, task) => {
            if (err) res.status(400).send('err');
            else {
                res.status(200).json(task);
            }
        });
});

router.post('/tables', (req, res, next) => {
    var newTables = new Tables();
    newTables.phone_name = req.body.phone_name
    newTables.company_name = req.body.company_name
    newTables.img = req.body.img
    newTables.details = req.body.details
    newTables.price_num = req.body.price_num
    newTables.price_str = req.body.price_str
    newTables.save((err, task) => {
        if (err) res.status(400).send('err');
        else {
            res.status(200).json(task);
        }
    }); 
});
router.delete('/tables/:id', (req, res, next) => {
    Tables.findByIdAndRemove({
        _id: req.params.id
    }, (err, task) => {
        if (err) next(err);
        else {
            console.log('deleted')
            res.json({ status: true });
        }
    });
});

router.put('/tables/:id',  (req, res, next) => {
    Tables.findOneAndUpdate({
        _id: req.params.id
    }, {
            $set: {
                phone_name: req.body.phone_name,
                company_name: req.body.company_name,
                img: req.body.img,
                details: req.body.details,
                price_num: req.body.price_num,
                price_str: req.body.price_str
            }
        }, { upsert: true }, (err, task) => {
            if (err) next(err);
            else {
                console.log('updated');
                res.json({ status: 'updated' });
            }
        });
});
module.exports = router;