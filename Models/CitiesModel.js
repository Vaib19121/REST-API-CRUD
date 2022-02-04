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
    restaurants: [
        {
            title: {
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
            },
            food: [
                {
                    food_name: {
                        type: String,
                        required: true
                    },
                    food_desc: {
                        type: String,
                        required: true
                    },
                    food_price: {
                        type: String,
                        required: true
                    },
                    food_imgurl: {
                        type: String,
                        required: true
                    },
                    food_ratings: {
                        type: String,
                        required: true
                    },
                    food_time: {
                        type: String,
                        required: true
                    },
                    food_type: {
                        type: String,
                    },
                    offer: {
                        type: String,
                        required: true
                    }
                },
                {
                    food_name: {
                        type: String,
                        required: true
                    },
                    food_desc: {
                        type: String,
                        required: true
                    },
                    food_price: {
                        type: String,
                        required: true
                    },
                    food_imgurl: {
                        type: String,
                        required: true
                    },
                    food_ratings: {
                        type: String,
                        required: true
                    },
                    food_time: {
                        type: String,
                        required: true
                    },
                    food_type: {
                        type: String,
                    },
                    offer: {
                        type: String,
                        required: true
                    }
                },
                {
                    food_name: {
                        type: String,
                        required: true
                    },
                    food_desc: {
                        type: String,
                        required: true
                    },
                    food_price: {
                        type: String,
                        required: true
                    },
                    food_imgurl: {
                        type: String,
                        required: true
                    },
                    food_ratings: {
                        type: String,
                        required: true
                    },
                    food_time: {
                        type: String,
                        required: true
                    },
                    food_type: {
                        type: String,
                    },
                    offer: {
                        type: String,
                        required: true
                    }
                },
                {
                    food_name: {
                        type: String,
                        required: true
                    },
                    food_desc: {
                        type: String,
                        required: true
                    },
                    food_price: {
                        type: String,
                        required: true
                    },
                    food_imgurl: {
                        type: String,
                        required: true
                    },
                    food_ratings: {
                        type: String,
                        required: true
                    },
                    food_time: {
                        type: String,
                        required: true
                    },
                    food_type: {
                        type: String,
                    },
                    offer: {
                        type: String,
                        required: true
                    }
                },
                {
                    food_name: {
                        type: String,
                        required: true
                    },
                    food_desc: {
                        type: String,
                        required: true
                    },
                    food_price: {
                        type: String,
                        required: true
                    },
                    food_imgurl: {
                        type: String,
                        required: true
                    },
                    food_ratings: {
                        type: String,
                        required: true
                    },
                    food_time: {
                        type: String,
                        required: true
                    },
                    food_type: {
                        type: String,
                    },
                    offer: {
                        type: String,
                        required: true
                    }
                },
                {
                    food_name: {
                        type: String,
                        required: true
                    },
                    food_desc: {
                        type: String,
                        required: true
                    },
                    food_price: {
                        type: String,
                        required: true
                    },
                    food_imgurl: {
                        type: String,
                        required: true
                    },
                    food_ratings: {
                        type: String,
                        required: true
                    },
                    food_time: {
                        type: String,
                        required: true
                    },
                    food_type: {
                        type: String,
                    },
                    offer: {
                        type: String,
                        required: true
                    }
                },
                
            ]
        }
    ]
});

module.exports = moongoose.model('Cities', CitiesSchema);