const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const router = require('express').Router();
mongoose.set('useFindAndModify', false);
let phoneSchema = new Schema({
    _id:String,
    phone_name: String,
    company_name: String,
    img: String,
    details: String,
    price_num: Number,
    price_str: String
});
Phones = mongoose.model('dbphones', phoneSchema);
router.get('/phones', (req, res, next) => {
    Phones.find({})
        .exec((err, tasks) => {
            console.log(tasks)
            if (err) res.status(400).send('err');
            else {
                res.status(200).json(tasks);
            }
        });
});

router.get('/phones/:id', (req, res, next) => {
    Phones.findOne(
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

router.post('/phones', (req, res, next) => {
    var newPhones = new Phones();
    newPhones.phone_name = req.body.phone_name
    newPhones.company_name = req.body.company_name
    newPhones.img = req.body.img
    newPhones.details = req.body.details
    newPhones.price_num = req.body.price_num
    newPhones.price_str = req.body.price_str
    newPhones.save((err, task) => {
        if (err) res.status(400).send('err');
        else {
            res.status(200).json(task);
        }
    }); 
});
router.delete('/phones/:id', (req, res, next) => {
    Phones.findByIdAndRemove({
        _id: req.params.id
    }, (err, task) => {
        if (err) next(err);
        else {
            console.log('deleted')
            res.json({ status: true });
        }
    });
});

router.put('/phones/:id',  (req, res, next) => {
    Phones.findOneAndUpdate({
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