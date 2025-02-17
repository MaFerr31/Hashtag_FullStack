// JavaScript Async
// await async
//Fullfilled

import { MongoClient } from "mongodb";

const URI = "mongodb+srv://Mariana:amorc321@cluster0.xyqsf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
//const songCollection = await db.collection('songs').find({}).toArray();

// console.log(songCollection);
