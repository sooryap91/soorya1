const express = require('express')
const router = express.Router()
const DATA = require('../models/otp')
const path = require('path');


router.post('/api/addform',async(req,res)=>{
    try {
    let item = {
        email : req.body.email,
        textbox :req.body.textbox,
    }
    const newMobile = new DATA(item)
    const saveMobile = await newMobile.save()
    res.send(saveMobile)
    } catch (error) {
        console.log(error)
    }
})
router.post('/api/addotp',async(req,res)=>{
    try {
    let item = {
        email : req.body.email,
        textbox :req.body.textbox,
    }
    const newMobile = new DATA(item)
    const saveMobile = await newMobile.save()
    res.send(saveMobile)
    } catch (error) {
        console.log(error)
    }
})












module.exports=router