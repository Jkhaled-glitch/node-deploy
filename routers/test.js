const express = require('express')
const router = express.Router();

// require model for this router if needed

const data = [
    {
        id:0,
        name:"khaled",
        age: 23
    },
    {
        id:1,
        name:"Fatma",
        age: 23
    },
    {
        id:2,
        name:"Azer",
        age: 23
    },
]


//send all data to client
router.get('/', async (req, res) => {
  try {
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

router.get('/:id', async (req, res) => {
 
  const id = req.params.id;
  try {
    //find the user for this id
    const user = data.filter((user)=>user.id == id)[0];

    res.send(user);
  } catch (err) {
    res.send(err);
  }
});

router.post('/add', async (req, res, next) => {
  const user = req.body;
  try {
    console.log( "User from client :")
    console.log( user)
    res.send("successfully added")
  } catch (err) {
    res.send(err);
  }
})

module.exports = router