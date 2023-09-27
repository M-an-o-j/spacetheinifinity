const express = require('express')
const {AlienEmail} = require('../controllers/Alienemail')
const router = express.Router()


router.route('/AlienEmail').post(AlienEmail)
// router.route('/OtpMail').post(OtpEmail)

module.exports = router