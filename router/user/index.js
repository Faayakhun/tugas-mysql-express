const express = require('express')
const router = express.Router()

const {getAllUser,getUserByID,getOrderByUserID} = require ('./user.controller')

router.get('/', getAllUser)
router.get('/:id',getUserByID)
router.get('/:id/pesanan', getOrderByUserID)

module.exports = router