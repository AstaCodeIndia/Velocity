var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.get('/quiz', function (req, res, next) {
  res.render('quiz', { title: 'Express' });
});
router.get('/Weekly-quiz', function (req, res, next) {
  res.render('Weekly-quiz', { title: 'Express' });
});
router.get('/sign-up', function (req, res, next) {
  res.render('Sign-up', { title: 'Express' });
});
router.get('/login', function (req, res, next) {
  res.render('Login', { title: 'Express' });
});
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'Express' });
});
module.exports = router;
