const express = require("express");
const bodyParser = require("body-parser");//npm install body-parser

const app = express();
app.use(bodyParser.urlencoded({extended: true}));//This must be used when we try to parse HTTP request and using encoded we can get access to the form data

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  // console.log(req.body.num1);//This is posible only using bodyParser
  let num1 = Number(req.body.num1)
  let num2 = Number(req.body.num2)
  let result = num1 + num2;
  res.send("The result of the calculation is " + result);
});

app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/bmicalculator", function(req, res) {
  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height);
  let bmi = Math.round(weight/(Math.pow(height, 2)));
  res.send("Your BMI es " + bmi);
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
