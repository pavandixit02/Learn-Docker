const express = require('express');
const app = express();

app.get("/", (req, res) =>{
    res.json(
        [
            {
                id: 1,
                employeeName: "Pavan",
                employeeSalary: 100000
            },
            {
                id: 2,
                employeeName: "Priyanshu",
                employeeSalary: 90000
            },
            {
                id: 3,
                employeeName: "Pankaj",
                employeeSalary: 80000
            }
        ]
    )  
} )
app.listen(4000, () =>{
     console.log("App is Running on port No: 4000")
    })