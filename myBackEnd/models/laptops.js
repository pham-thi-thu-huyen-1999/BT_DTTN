const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const router = require('express').Router();
mongoose.set('useFindAndModify', false);
let laptopSchema = new Schema({
    _id: String,
    phone_name: String,
    company_name: String,
    img: String,
    price_num: Number,
    price_str: String
});
//gán Laptop = mongoose.model('dblaptop', phoneSchema); gọi từ mongodb
Laptops = mongoose.model('dblaptop', laptopSchema);
router.get('/laptops', (req, res, next) => {
    Laptops.find({})
        .exec((err, tasks) => {
            console.log(tasks)
            if (err) res.status(400).send('err');
            else {
                res.status(200).json(tasks);
            }
        });
});

router.get('/laptops/:id', (req, res, next) => {
    Laptops.findOne(
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

router.post('/laptops', (req, res, next) => {
    var newPhones = new Laptops();
    newPhones._id = req.body._id
    newPhones.phone_name = req.body.phone_name
    newPhones.company_name = req.body.company_name
    newPhones.img = req.body.img
    newPhones.price_num = req.body.price_num
    newPhones.price_str = req.body.price_str
    newPhones.save((err, task) => {
        if (err) res.status(400).send('err');
        else {
            res.status(200).json(task);
        }
    });
    Laptops.find({
        "$text": {
            "search": req.body.phone_name
        }
    })
});
router.delete('/laptops/:_id', (req, res, next) => {
    Laptops.findByIdAndRemove({
        _id: req.params.id
    }, (err, task) => {
        if (err) next(err);
        else {
            console.log('deleted')
            res.json({ status: true });
        }
    });
});

router.put('/laptops/:id',  (req, res, next) => {
    Laptops.findOneAndUpdate({
        _id: req.params.id
    }, {
            $set: {
                _id: req.body._id,
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