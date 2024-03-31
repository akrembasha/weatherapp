import express from "express";
import weather from 'weather-js';

const app = express();
const port = 3000;

app.get('/', function(req, res) {
    const city = req.query.city;
    const state = req.query.state;

    weather.find({search: city + ', ' + state, degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
        const weather_data = JSON.stringify(result, null, 2);
        res.send(weather_data);
    });
  });

app.listen(port, () => {console.log(`Server started on port ${port}`);});