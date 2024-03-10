const ejs = require('ejs')
const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let projectName = "Police Management System"
    res.render("index",{projectName:projectName})
})
app.get('/database', (req, res) => {
    let projectName = "Hospital Management System"
    res.render("database")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})