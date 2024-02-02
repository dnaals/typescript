const { MongoClient } = require('mongodb');
const testRouter = require('express').Router();
const connectUrl = process.env.MONGO_DB;
const client = new MongoClient(connectUrl);


const dbConnect = async () => {
    await client.connect();
}

const crud = async (type, info) => {
    const db = client.db('bucket');
    collection = db.collection('bucket-list');
    switch (type) {
        case 'post': await collection.insertOne(info); break;
        case 'put': await collection.updateOne({ id: info.id }, { $set: { name: info.name } }); break;
        case 'complete': await collection.updateOne({ id: info[0].id }, { $set: { state: !info[0].state } }); break;
        case 'delete': await collection.deleteOne({ id: info }); break;

    }
    const data = await collection.find().toArray();
    return data;

}

testRouter.get('/test', async (req, res) => (
    res.send(await crud())
))

testRouter.post('/test', async (req, res) => (
    // console.log(req.body)
    res.send(await crud('post', req.body))
))
testRouter.get('/test/:id', async (req, res) => {
    const { id } = req.params;
    const findData = await crud()
    const find = findData.find(obj => obj.id == id)
    res.send(find)
})

testRouter.delete('/test/:id', async (req, res) => {
    const { id } = req.params;
    const findData = await crud()
    const find = findData.find(obj => obj.id == id)
    // console.log(find.id)
    res.send(await crud('delete', find.id))
})

testRouter.put('/test', async (req, res) => {
    res.send(await crud('put', req.body))
})

testRouter.put('/test/complete', async (req, res) => {
    const { id } = req.body;
    const data = await collection.find({ id: id }).toArray();
    res.send(await crud('complete', data))
})

module.exports = { testRouter, dbConnect };

