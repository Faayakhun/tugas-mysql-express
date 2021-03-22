const express = require('express')
const router = express.Router()

const {getAllOrder,getOrderByID} = require ('./pesanan.controller')

router.get('/', getAllOrder)
router.get('/:id', getOrderByID)

module.exports = router