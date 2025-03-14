import fetch from 'node-fetch';

const sampleData = [
  {
    city: 'bangalore',
    description: 'Popular for its gardens and adventure spots.',
    spots: [
      { name: 'Lalbagh Botanical Garden', genres: ['nature', 'adventure'] },
      { name: 'Wonderla Amusement Park', genres: ['adventure'] },
      { name: 'Bangalore Palace', genres: ['historical site'] },
    ],
  },
  {
    city: 'chennai',
    description: 'Known for its historical sites and scenic beaches.',
    spots: [
      { name: 'Marina Beach', genres: ['nature'] },
      { name: 'Fort St. George', genres: ['historical site'] },
      { name: 'VGP Universal Kingdom', genres: ['adventure', 'nature'] },
    ],
  },
  {
    city: 'udupi',
    description: 'Famous for its temples and coastal cuisine.',
    spots: [
      { name: 'Sri Krishna Temple', genres: ['historical site'] },
      { name: 'Malpe Beach', genres: ['nature'] },
      { name: 'Kaup Lighthouse', genres: ['adventure', 'nature'] },
    ],
  },
  {
    city: 'kolkata',
    description: 'Known as the cultural capital of India.',
    spots: [
      { name: 'Victoria Memorial', genres: ['historical site'] },
      { name: 'Howrah Bridge', genres: ['adventure', 'nature'] },
      { name: 'Eco Park', genres: ['nature'] },
    ],
  },
  {
    city: 'mumbai',
    description: 'The city of dreams and Bollywood.',
    spots: [
      { name: 'Gateway of India', genres: ['historical site'] },
      { name: 'Marine Drive', genres: ['nature'] },
      { name: 'Essel World', genres: ['adventure'] },
    ],
  },
  {
    city: 'delhi',
    description: 'The heart of India with rich history.',
    spots: [
      { name: 'Red Fort', genres: ['historical site'] },
      { name: 'India Gate', genres: ['nature'] },
      { name: 'Adventure Island', genres: ['adventure'] },
    ],
  },
  {
    city: 'kochi',
    description: 'A coastal city known for its backwaters.',
    spots: [
      { name: 'Chinese Fishing Nets', genres: ['nature'] },
      { name: 'Mattancherry Palace', genres: ['historical site'] },
      { name: 'Wonderla Kochi', genres: ['adventure'] },
    ],
  },
  {
    city: 'goa',
    description: 'Famous for its beaches and vibrant nightlife.',
    spots: [
      { name: 'Baga Beach', genres: ['nature'] },
      { name: 'Fort Aguada', genres: ['historical site'] },
      { name: 'Dudhsagar Falls', genres: ['adventure', 'nature'] },
    ],
  },
  {
    city: 'ahmedabad',
    description: 'Known for its textiles and historical significance.',
    spots: [
      { name: 'Sabarmati Ashram', genres: ['historical site'] },
      { name: 'Kankaria Lake', genres: ['nature'] },
      { name: 'Adalaj Stepwell', genres: ['historical site'] },
    ],
  },
];

fetch('http://localhost:5000', {   
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(sampleData)  // sending sampleData as the request body
})
  .then(response => {
    console.log('Response status:', response.status);  // check response status
    return response.json();
  })
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });