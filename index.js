require('dotenv').config();
const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());






const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0.n1yvnuo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const treesCollection = client.db("floraDB").collection("trees");
async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        // post trees data to mongoDB
        app.post('/plants', async (req, res) => {
            const treeData = req.body;
            const result = await treesCollection.insertOne(treeData);
            res.send(result)
        })

        // get trees all data  from mongoDB
        app.get("/plants", async (req, res) => {
            const result = await treesCollection.find().toArray();
            res.send(result);
        })

        //  get single tree data from mongoDB
        app.get("/plants/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await treesCollection.findOne(query);
            res.send(result);

        });

        // PUT ? update data from mongoDB
        app.put("/plants/:id",async(req,res)=> {
            const id= req.params.id;
            const filter= {_id: new ObjectId(id)};
            const updatedTreeData= req.body;
            const updatedDoc= {
                $set: updatedTreeData
            };
            const options= {upsert : true};
            const result= await treesCollection.updateOne(filter,updatedDoc,options);
            res.send(result);

        })

        // delete data from mongoDB
        app.delete('/plants/:id', async(req,res)=> {
            const id=req.params.id;
            const query={_id : new ObjectId (id)};
            const result= await treesCollection.deleteOne(query);
            res.send(result)
        })

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get("/", (req, res) => {
    res.send("hello flora nest")
})

app.listen(port, () => {
    console.log(`My port is ${port}`)
})