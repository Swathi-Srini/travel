import express from 'express';
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';

const app = express();
const port = 5000;
app.use(bodyParser.json());

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'travel';
let client;

MongoClient.connect(url)
  .then((connectedClient) => {
    client = connectedClient;
    console.log('Connected to MongoDB');
  })
  .catch((err) => console.error('Error connecting to MongoDB:', err));

  app.put('/', (req, res) => {
    const collection = client.db(dbName).collection('spots');
    const sampleData = req.body;
  
    const promises = sampleData.map((cityData) => {
      return collection.updateOne(
        { city: cityData.city }, 
        { $set: cityData }, 
        { upsert: true } 
      );
    });
  
    Promise.all(promises)
      .then((results) => {
        console.log('Data upserted successfully', results);
        res.status(200).json({ message: 'Data upserted successfully', results });
      })
      .catch((err) => {
        console.error('Error during upsert:', err);
        res.status(500).json({ message: 'Failed to upsert data', error: err });
      });
  });
    
  app.get('/destination/:city', (req, res) => {
    const { city } = req.params;
  
    // log the received city
    console.log('Received city:', city);
  
    const collection = client.db(dbName).collection('spots');
  
    // find the city in mongodb
    collection.findOne({ city: { $regex: new RegExp(`^${city}$`, 'i') } })
      .then((cityData) => {
        if (!cityData) {
          console.error('City not found in database');
          return res.status(404).json({ message: 'City not found.' });
        }
        console.log('City data found:', cityData);
        res.json(cityData);
      })
      .catch((err) => {
        console.error('Error fetching city data:', err);
        res.status(500).json({ message: 'Error fetching city data', error: err });
      });
  });
  
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});