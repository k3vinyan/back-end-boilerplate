const mongoose = require('mongoose');
const SomethingModel = mongoose.model('Something');

exports.read_list_of_something = (req, res) => {
    SomethingModel.find({}, (err, something) => {
        if(err) res.send(err);
        res.json(something);
    });
};

exports.create_something = (req, res) => {
    const newSomething = new SomethingModel(req.body);
    newSomething.save( (err, something) => {
        if(err) res.send(err);
        res.json(something);
    });
};

exports.read_something = (req, res) => {
    SomethingModel.findById(req.params.id, (err, something) => {
        if(err) res.send(err);
        res.json(something);
    });
};

exports.update_something = (req, res) => {
    SomethingModel.findOneAndUpdate(
        { _id: req.params.somethingId },
        req.body,
        { new: true },
        (err, word) => {
            if(err) res.send(err);
            res.json(word);
        }
    )
}

exports.delete_something = (req, res) => {
    SomethingModel.deleteOne( { _id: req.params.id }, err => {
        if(err) res.send(err);
        res.json({
            message: 'Somethind has been deleted',
            _id: req.params.somethingId
        })
    })
}