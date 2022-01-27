const moongoose = require('mongoose');

const CitiesSchema = moongoose.Schema({
    cityName: {
       type: String,
       required: true
    },
    cityCode: {
        type: Number,
        required: true
    },
    desc: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = moongoose.model('Cities', CitiesSchema);