var express=require("express")
var mongoose=require("mongoose")
var bodyParser=require("body-parser")
const app=express()
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))