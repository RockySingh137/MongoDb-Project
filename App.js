var express=require("express")
var mongoose=require("mongoose")
var bodyParser=require("body-parser")
const app=express()
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))
mongoose.connect("mongodb://localhost:27017/test6",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

var db=mongoose.connection
db.on('error',()=>console.log('connection error'))
db.once('open',()=>
console.log("connected to db")
)
app.post('/sign_up',(req,res)=>{
    var fn=req.body.fname
    var course=req.body.course
    var age=req.body.age
    var email=req.body.email
    var data={
        "Student name":fn,
        "Course":course,
        "Age":age,
        "Email Address":email
    }
    db.collection('user1').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Document has been inserted")
    })
    return res.redirect('signup_success.html')
})