// Full Documentation - https://docs.turbo360.co
const express = require('express');
const router = express.Router();

const players = [
  { firstName: "Eli", lastName: "Manning", position: "qb", age: 37, team: "nyg" },
  { firstName: "Tom", lastName: "Brady", position: "qb", age: 40, team: "xxx" },
  { firstName: "Brad", lastName: "Pit", position: "idc", age: 30, team: "yes" }
];

const teams = [

  { name: "giants", city: "New York", conference: "nfc" },
  { name: "patriot", city: "New England", conference: "afc" },
  { name: "texans", city: "Houston", conference: "afc" }
];

const db = {
  team: teams,
  player: players
};

router.get('/:resource', (req, res) => {
  const resource = req.params.resource;

  const data = db[resource];

if (data == null) {
  res.json({
    confirmacion: 'fail',
    message: 'Inavlid Request. Resource Undefined'
  });
  return;
}
  res.json({
    confirmacion: 'success',
    data: data
  });

});

// router.get('/player', (req, res) =>{
//   res.json({
//     confirmacion: 'success',
//     data: players
//   }); 

// });
// router.get('/team', (req, res) =>{
//   res.json({
//     confirmacion: 'success',
//     data: teams
//   }); 

// });



module.exports = router
