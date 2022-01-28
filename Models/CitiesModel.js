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
    },
    restaurants: {
        restaurant1: {
            tittle: {
                type: String,
                required: true
            },
            rest_desc:{
                type: String,
                required: true
            } ,
            ratings:{
                type: String,
                required: true
            },
            address: {
                type: String,
                required: true
            },
            imgurl:{
                type: String,
                required: true
            }
        }
    }
});

module.exports = moongoose.model('Cities', CitiesSchema);