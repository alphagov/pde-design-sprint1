var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here
router.get('/team-a/confirm', function (req, res) {
  res.render('team-a/confirm.html', {
    'data_what': "I want to receive only a yes or no answer to the Blue Badge eligibility criteria and an expiry date for the eligibility.",
    'data_provided': "First name, surname, date of birth, National Insurance number.",
    'data_use': "Only use the check to confirm whether a citizen automatically qualifies for a Blue Badge.",
    'data_how': "Via the PDE API.",
    'data_when': "Eligibility checking will happen only when citizen's Blue Badge application has been received and they have given permission to perform an eligibility check"
  })
})

module.exports = router
