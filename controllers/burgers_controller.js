const express = require('express');
const router = express.Router();
const burger = require('../model/burger');

//routes eh?

router.get('/', (req, res) => {
  burger.all(function(err, result) {
    console.log("Hi, I'm top level get route result: ", result);
    if (err) {
      console.log(err);
    }
    let visibleObject = {
      burger: result
    };
    console.log("Hi, I'm visible object: ", visibleObject);
    res.render('index', visibleObject.burger);
  });
});

router.post('/api/burger', (req, res) => {
  burger.insert(
    ['burger_name', 'devoured'],
    [req.body.burgerName, req.body.devouredState],
    (err, result) => {
      if (err) throw err;

      res.json({ id: result.insertId });
    }
  );

  res.redirect('/');
});

// router.put('/api/burger/:id', (req, res));
module.exports = router;
