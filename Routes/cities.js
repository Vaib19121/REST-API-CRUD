const express = require("express");
const cities = require("../Models/CitiesModel");
const router = express.Router();


//GET POSTS
router.get("/",async (req, res) => {
  try {
      const city = await cities.find();
      res.json(city);
  } catch (error) {
      res.json({message: error});
  }
});

//SUBMIT POST
router.post("/",async (req, res) => {
  const city = new cities({
    cityName: req.body.cityName,
    cityCode: req.body.cityCode,
    desc: req.body.desc,
  });
  try {
    const savedCities =  await city.save();
    res.json(savedCities);   
  } catch (error) {
    res.json({message: error});      
  }  
});

//SPECIFIC POST
router.get('/:cityId',async (req, res) =>{
    try {
        const city = await cities.findById(req.params.cityId);
        res.json(city);
    } catch (error) {
        res.json({message: error});
    }
});

//DELETE POST
router.delete('/:cityId',async (req, res) => {
    try {
        const city = await cities.deleteOne({_id: req.params.cityId});
        res.json(city);
    } catch (error) {
        res.json({message: error});
    }
});

//UPDATE POST   
router.patch('/:cityId', async (req, res) => {
    try {
        const city = await cities.updateOne({_id: req.params.cityId}, { $set: {cityName: req.body.cityName}});
        res.json(city);
    } catch (error) {
        res.json({message: error});
    }
});
  
module.exports = router;
