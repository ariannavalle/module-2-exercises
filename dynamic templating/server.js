require('dotenv').config();
const students = require("./exam-info");

const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

// 1: in the home,list all the students who took the exam (list all the students)
app.get('/', (req,res,next)=>{
  res.render("full-list", {students})
})

// 2: in the '/results' list all the students who passed the test and their score.
// Also, students should be in descending order based on their score.

app.get(('/results'), (req,res,next)=>{
  const sorted = [...students].sort((a,b) => {
    return a.score < b.score ? 1 : -1
  })
  res.render("results", {sorted})
})
 
app.listen(process.env.PORT, () =>
  console.log(`App running on ${process.env.PORT}.`)
);
