const express = require("express");
const cities = require("../Models/CitiesModel");
const router = express.Router();

//GET POSTS
router.get("/", async (req, res) => {
  try {
    const city = await cities.find();
    res.json(city);
  } catch (error) {
    res.json({ message: error });
  }
});

//SUBMIT POST
router.post("/", async (req, res) => {
  const city = new cities({
    cityName: req.body.cityName,
    cityCode: req.body.cityCode,
    desc: req.body.desc,
    restaurants: [
      {
        title: req.body.restaurants[0].title,
        rest_desc: req.body.restaurants[0].rest_desc,
        ratings: req.body.restaurants[0].ratings,
        address: req.body.restaurants[0].address,
        imgurl: req.body.restaurants[0].imgurl,
        food: [
          {
            food_name: req.body.restaurants[0].food[0].food_name,
            food_desc: req.body.restaurants[0].food[0].food_desc,
            food_price: req.body.restaurants[0].food[0].food_price,
            food_imgurl: req.body.restaurants[0].food[0].food_imgurl,
            food_ratings: req.body.restaurants[0].food[0].food_ratings,
            food_time: req.body.restaurants[0].food[0].food_time,
            food_type: req.body.restaurants[0].food[0].food_type,
            offer: req.body.restaurants[0].food[0].offer
          },
          {
            food_name: req.body.restaurants[0].food[1].food_name,
            food_desc: req.body.restaurants[0].food[1].food_desc,
            food_price: req.body.restaurants[0].food[1].food_price,
            food_imgurl: req.body.restaurants[0].food[1].food_imgurl,
            food_ratings: req.body.restaurants[0].food[1].food_ratings,
            food_time: req.body.restaurants[0].food[1].food_time,
            food_type: req.body.restaurants[0].food[1].food_type,
            offer: req.body.restaurants[0].food[1].offer
          },
          {
            food_name: req.body.restaurants[0].food[2].food_name,
            food_desc: req.body.restaurants[0].food[2].food_desc,
            food_price: req.body.restaurants[0].food[2].food_price,
            food_imgurl: req.body.restaurants[0].food[2].food_imgurl,
            food_ratings: req.body.restaurants[0].food[2].food_ratings,
            food_time: req.body.restaurants[0].food[2].food_time,
            food_type: req.body.restaurants[0].food[2].food_type,
            offer: req.body.restaurants[0].food[2].offer
          },
          {
            food_name: req.body.restaurants[0].food[3].food_name,
            food_desc: req.body.restaurants[0].food[3].food_desc,
            food_price: req.body.restaurants[0].food[3].food_price,
            food_imgurl: req.body.restaurants[0].food[3].food_imgurl,
            food_ratings: req.body.restaurants[0].food[3].food_ratings,
            food_time: req.body.restaurants[0].food[3].food_time,
            food_type: req.body.restaurants[0].food[3].food_type,
            offer: req.body.restaurants[0].food[3].offer
          },
          {
            food_name: req.body.restaurants[0].food[4].food_name,
            food_desc: req.body.restaurants[0].food[4].food_desc,
            food_price: req.body.restaurants[0].food[4].food_price,
            food_imgurl: req.body.restaurants[0].food[4].food_imgurl,
            food_ratings: req.body.restaurants[0].food[4].food_ratings,
            food_time: req.body.restaurants[0].food[4].food_time,
            food_type: req.body.restaurants[0].food[4].food_type,
            offer: req.body.restaurants[0].food[4].offer
          },
          {
            food_name: req.body.restaurants[0].food[5].food_name,
            food_desc: req.body.restaurants[0].food[5].food_desc,
            food_price: req.body.restaurants[0].food[5].food_price,
            food_imgurl: req.body.restaurants[0].food[5].food_imgurl,
            food_ratings: req.body.restaurants[0].food[5].food_ratings,
            food_time: req.body.restaurants[0].food[5].food_time,
            food_type: req.body.restaurants[0].food[5].food_type,
            offer: req.body.restaurants[0].food[5].offer
          },
          
        ]
      }
    ]
  });
  try {
    const savedCities = await city.save();
    res.json(savedCities);
  } catch (error) {
    console.log(error);
  }
});

//SPECIFIC POST
router.get("/:cityId", async (req, res) => {
  try {
    const city = await cities.findById(req.params.cityId);
    res.json(city);
  } catch (error) {
    res.json({ message: error });
  }
});

//DELETE POST
router.delete("/:cityId", async (req, res) => {
  try {
    const city = await cities.deleteOne({ _id: req.params.cityId });
    res.json(city);
  } catch (error) {
    res.json({ message: error });
  }
});

//UPDATE POST
router.patch("/:cityId", async (req, res) => {
  try {
    const city = await cities.updateOne(
      { _id: req.params.cityId },
      {
        $set: {
          cityName: req.body.cityName,
          cityCode: req.body.cityCode,
          desc: req.body.desc,
          restaurants: [
            {
              title: req.body.restaurants[0].title,
              rest_desc: req.body.restaurants[0].rest_desc,
              ratings: req.body.restaurants[0].ratings,
              address: req.body.restaurants[0].address,
              imgurl: req.body.restaurants[0].imgurl,
              food: [
                {
                  food_name: req.body.restaurants[0].food[0].food_name,
                  food_desc: req.body.restaurants[0].food[0].food_desc,
                  food_price: req.body.restaurants[0].food[0].food_price,
                  food_imgurl: req.body.restaurants[0].food[0].food_imgurl,
                  food_ratings: req.body.restaurants[0].food[0].food_ratings,
                  food_time: req.body.restaurants[0].food[0].food_time,
                  food_type: req.body.restaurants[0].food[0].food_type,
                  offer: req.body.restaurants[0].food[0].offer
                },
                {
                  food_name: req.body.restaurants[0].food[1].food_name,
                  food_desc: req.body.restaurants[0].food[1].food_desc,
                  food_price: req.body.restaurants[0].food[1].food_price,
                  food_imgurl: req.body.restaurants[0].food[1].food_imgurl,
                  food_ratings: req.body.restaurants[0].food[1].food_ratings,
                  food_time: req.body.restaurants[0].food[1].food_time,
                  food_type: req.body.restaurants[0].food[1].food_type,
                  offer: req.body.restaurants[0].food[1].offer
                },
              ]
            }
          ]
        },
      }
    );
    res.json(city);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
