const Express = require("express");
const app = Express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors  = require("cors");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'myschool'
});
app.use(cors());
app.use(Express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    const sqlSelect = "SELECT * FROM student_list";
    db.query(sqlSelect,(err,result)=>{
    res.send(result);
    })
})

app.get('/read/:id',(req,res)=>{
    const sqlRead = "SELECT * FROM student_list WHERE ID = ?";
    const id = req.params.id;
    db.query(sqlRead,[id],(err,result)=>{
        if(err) return res.json({Message: "Error inside the server"})
        return res.json(result);
    })
})

app.post('/student/add',(req,res)=>{
    const sqlAdd = "INSERT INTO student_list (`NAME`, `EMAIL`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email
    ]
    db.query(sqlAdd,[values],(err,result)=>{
        if(err) return res.json(err);
        return res.json(result);
    })
})

app.put('/student/update/:id',(req,res)=>{
    const sqlUpdate = "UPDATE student_list SET `NAME`=?,`EMAIL`=? WHERE ID=?";
    const id = req.params.id;
    // const name = req.body.name;
    // const email = req.body.email
    db.query(sqlUpdate,[req.body.name, req.body.email, id],(err,result)=>{
        if(err) return res.json({Message: "Error inside the server"});
        return res.json(result);
    })
})

app.delete('/delete/:id',(req,res)=>{
    const sqlDelete = "DELETE FROM student_list WHERE ID =?";
    const id = req.params.id;
    db.query(sqlDelete,[id],(err,result)=>{
        if(err) return res.json({Message: "Error inside the server"});
        return res.json(result);
    })
})

app.listen(5021,()=>{
    console.log("connected")
})