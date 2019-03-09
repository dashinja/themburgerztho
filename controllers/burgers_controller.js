const express = require('express');
const router = express.Router();
const burger = require('../model/burger');

//routes eh?

router.get('/', (req, res) => {
  burger.all(function(err, result) {
    if (err) {
      console.log(err);
    }
    let visibleObject = {
      burger: result
    };
    res.render('index', visibleObject);
  });
});

router.post('/api/burger', (req, res) => {
  burger.insert(req.body.burgerName, req.body.devouredState, (err, result) => {
    console.log(err);
    res.redirect('/');
  });
});

router.get('/api/burger', (req, res) => {
  burger.all(function(err, result) {
    if (err) {
      console.log(err);
    }
    let visibleObject = {
      burger: result
    };
    res.render('api', visibleObject);
  });
});

router.put('/api/burger/:id', (req, res) => {

  let result = req.body;
  result.devoured = 'true';
  burger.update(parseInt(result.id), (err, result) => {
  });

  let anotha = [];
  anotha.push(result);
  let burgerObj = { burger: anotha };
  res.render('index', burgerObj);

});
module.exports = router;
