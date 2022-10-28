const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json())

//user : volunteer1
//pass: N9aytHQ6lRzdLfeN


const uri = "mongodb+srv://volunteer1:N9aytHQ6lRzdLfeN@cluster0.dxklnjh.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try {
        await client.connect();
        const serviceCollection = client.db("volunteers").collection("services");
        const service = { name: 'animal shelter' };
        const result = await serviceCollection.insertOne(service);
        console.log(`user inserted with id ${result.insertedId}`)
    }
    finally {
        // await client.close();
    }

}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('running my node server on port')
})

app.listen(port, () => {
    console.log('crud server is running');
})