const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const router = require('express').Router();
mongoose.set('useFindAndModify', false);
let ProductsSchema = new Schema({
    _id:String,
    productName: String,
    companyname: String,
    img: String,
    content: String,
    details: String,
    price_num: Number,
    price_str: String
});
Products = mongoose.model('dbAllProducts', ProductsSchema);
router.get('/allProducts', (req, res, next) => {
    Products.find({})
        .exec((err, tasks) => {
            console.log(tasks)
            if (err) res.status(400).send('err');
            else {
                res.status(200).json(tasks);
            }
        });
});

router.get('/allProducts/:id', (req, res, next) => {
    Products.findOne(
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

router.post('/allProducts', (req, res, next) => {
    var newProducts = new Products();
    newProducts.productName = req.body.productName
    newProducts.companyname = req.body.companyname
    newProducts.img = req.body.img
    newProducts.content = req.body.content
    newProducts.details = req.body.details
    newProducts.price_num = req.body.price_num
    newProducts.price_str = req.body.price_str
    newProducts.save((err, task) => {
        if (err) res.status(400).send('err');
        else {
            res.status(200).json(task);
        }
    }); 
});
router.delete('/allProducts/:id', (req, res, next) => {
    Products.findByIdAndRemove({
        _id: req.params.id
    }, (err, task) => {
        if (err) next(err);
        else {
            console.log('deleted')
            res.json({ status: true });
        }
    });
});

router.put('/allProducts/:id',  (req, res, next) => {
    Products.findOneAndUpdate({
        _id: req.params.id
    }, {
            $set: {
                productName: req.body.phone_name,
                companyname: req.body.company_name,
                img: req.body.img,
                content: req.body.content,
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