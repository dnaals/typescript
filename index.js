require('dotenv').config({ path: '.env' });
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const test = require('./router/test.js')
const push = require('./router/push.js')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', test.testRouter)
app.use('/push', push)






app.listen(3030, test.dbConnect)
//


// app.put('/test/complete', function (req, res) {
//     const { id } = req.body;
//     data.test = data.test.map(obj => {
//         if (obj.id == id) {
//             obj.state = !obj.state;
//         }
//         return obj;
//     })
//     const body = JSON.stringify(data);
//     fs.writeFileSync('./data.json', body);
//     res.send(data.test);
// })





// app.delete('/test/:id', function (req, res) {
//     const { id } = req.params;
//     res.send(crud('delete', res.body))
// })


// const fs = require('fs');
// const cors = require('cors')

// let data = JSON.parse(fs.readFileSync('./data.json'));

// app.use(bodyParser.json())
// app.use(cors());

// app.get('/test', function (req, res) {
//     res.send(data.test);
// })

// app.get('/test/:id', function (req, res) {
//     const { id } = req.params;
//     const findData = data.test.filter(obj => obj.id == id);
//     res.send(findData);
// })

// app.delete('/test/:id', function (req, res) {
//     const { id } = req.params;
//     data.test = data.test.filter(obj => obj.id != id)
//     res.send(data.test);
//     const body = JSON.stringify(data);
//     fs.writeFileSync('./data.json', body);
// })

// app.post('/test', function (req, res) {
//     console.log(req.body)

//     data.test.push(req.body);
//     const body = JSON.stringify(data);
//     fs.writeFileSync('./data.json', body);

//     res.send(data.test);
// })

// app.put('/test/', function (req, res) {
//     const updateBody = req.body;
//     data.test = data.test.map(obj => {
//         if (obj.id == updateBody.id) {
//             obj = updateBody;
//         }
//         return obj;
//     })
//     const body = JSON.stringify(data);
//     fs.writeFileSync('./data.json', body);
//     res.send(data.test);
// })

// app.put('/test/complete', function (req, res) {
//     const { id } = req.body;
//     data.test = data.test.map(obj => {
//         if (obj.id == id) {
//             obj.state = !obj.state;
//         }
//         return obj;
//     })
//     const body = JSON.stringify(data);
//     fs.writeFileSync('./data.json', body);
//     res.send(data.test);
// })



