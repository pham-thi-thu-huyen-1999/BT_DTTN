const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const router = require('express').Router();

mongoose.set('useFindAndModify', false);
let oderSchema = new Schema({
    _id:String,
    userName: String,
    adddress: String,
    numberPhone: String,
    amout: Number,
    totalmoney: Number
});
User = mongoose.model('dboders', oderSchema);
router.get('/oders', (req, res, next) => {
    User.find({})
        .exec((err, tasks) => {
            console.log(tasks)
            if (err) res.status(400).send('err');
            else {
                res.status(200).json(tasks);
            }
        });
});
router.get('/oders/:userName', (req, res, next) => {
    User.findOne(
        {
            email: req.params.email
        }
    )
        .exec((err, tasks) => {
            console.log(tasks)
            if (err) res.status(400).send('err');
            else {
                res.status(200).json(tasks);
            }
        });
});
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
router.post('/users',(req, res, next) => {
    var newUsers = new User();
    newUsers.email = req.body.email;
    newUsers.username = req.body.username;
    newUsers.password = req.body.password;
    newUsers.repeatPassword = req.body.repeatPassword;
    newUsers.userName = req.body.userName;
    newUsers.adddress = req.body.adddress;
    newUsers.save((err, task) => {
        if (err) res.status(400).send('err');
        else {
            res.status(200).json(task);
        }
    });
    
    
});
router.post('api')

// router.get('/phones/:id', (req, res, next) => {
//     Phones.findOne(
//         {
//             _id: req.params.id
//         }
//     )
//         .exec((err, task) => {
//             if (err) res.status(400).send('err');
//             else {
//                 res.status(200).json(task);
//             }
//         });
// });


// router.delete('/phones/:id', (req, res, next) => {
//     Phones.findByIdAndRemove({
//         _id: req.params.id
//     }, (err, task) => {
//         if (err) next(err);
//         else {
//             console.log('deleted')
//             res.json({ status: true });
//         }
//     });
// });

// router.put('/phones/:id',  (req, res, next) => {
//     Phones.findOneAndUpdate({
//         _id: req.params.id
//     }, {
//             $set: {
//                 phone_name: req.body.phone_name,
//                 company_name: req.body.company_name,
//                 img: req.body.img,
//                 details: req.body.details,
//                 price_num: req.body.price_num,
//                 price_str: req.body.price_str
//             }
//         }, { upsert: true }, (err, task) => {
//             if (err) next(err);
//             else {
//                 console.log('updated');
//                 res.json({ status: 'updated' });
//             }
//         });
// });
module.exports = router;