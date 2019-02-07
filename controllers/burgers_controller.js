const express = require('express');
const router = express.Router();
const burger = require('../model/burger');

//routes eh?

router.get('/', (req, res) => {
  burger.all(function(err, result) {
    // console.log("Hi, I'm top level get route result: ", result);
    if (err) {
      console.log(err);
    }
    let visibleObject = {
      burger: result
    };
    // console.log("Hi, I'm visible object: ", visibleObject);
    res.render('index', visibleObject);
  });
});

router.post('/api/burger', (req, res) => {
  burger.insert(req.body.burgerName, req.body.devouredState, (err, result) => {
    // if (err) throw err;
    console.log(err);
    // console.log("I'm POST req.body:", req.body);
    // console.log("I'm POST, result: ", result);
    res.render('api', result);
    // res.json({ id: result.insertId });
    // res.redirect('/');
  });
});

router.get('/api/burger', (req, res) => {
  burger.all(function(err, result) {
    // console.log("Hi, I'm top level get route result: ", result);
    if (err) {
      console.log(err);
    }
    // console.log("I'm get's req.body:", req.body);
    // console.log("I'm get's result:", result);
    let visibleObject = {
      burger: result
    };
    // console.log('vbo:', visibleObject);
    // console.log('vbo.burger:', visibleObject.burger);
    // console.log('vbo.burger.result:', visibleObject.burger.result);
    // console.log("Hi, I'm visible object: ", visibleObject);
    res.render('api', visibleObject);
  });
});

router.put('/api/burger/:id', (req, res) => {
  // console.log("I'm PUT req.body:", req.body);
  // console.log("I'm PUT res.body:", res.body);

  let result = req.body;
  // console.log('preResult: ', result);
  // console.log('preResult.devoured: ', result.devoured);
  result.devoured = 'true';
  // console.log("I'm result.body.id: ", result.id);
  burger.update(parseInt(result.id), (err, result) => {
    // console.log("I'm PUT's result:", result);
    // console.log('changed rows: ', result.changedRows);
  });

  let anotha = [];
  anotha.push(result);
  // console.log("I'm anotha: ", anotha);
  // console.log('postResult: ', result);
  let burgerObj = { burger: anotha };
  res.render('index', burgerObj);

  // if ((result.devoured = false)) {
  //   result.devoured = true;
  //   console.log('postResult: ', result);
  //   let burgerObj = { burger: result };
  //   res.render('index', burgerObj);
  // }

  // burger
  //   .update('devoured', req.body.devoured, function(err, result) {
  //     res.render('index', result);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
});
module.exports = router;
