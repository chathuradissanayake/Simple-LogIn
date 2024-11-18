const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv');
const EmployeeModel = require('./models/employee');

const PORT = process.env.PORT || 5000;

dotenv.config();

const app = express()
app.use(express.json())
app.use(cors())

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err) )
})

app.post('/login', (req, res) => {
    const {email, password} = req.body
    EmployeeModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password){
                res.json('Success')
            } else {
                res.json('The password is incorrect !')
            }
        } else {
            res.json("No recode existed !")
        }
    })
})

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('DB connection successful'))
.catch((error) => console.log('DB connection failed', error))

// const port =process.env.PORT;
// app.listen(port, () =>{console.log(`Server is running on port ${port}`)});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });