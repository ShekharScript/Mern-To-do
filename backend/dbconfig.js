// const { MongoClient } = require("mongodb");
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const url = process.env.MONGO_DB_URL;

if (!url) {
    console.error(" Error: MONGO_URL variable .env file me nahi mila!");
}

const dbName="node-project";

export const collectionName="todo";
const client= new MongoClient(url)

export const connection=async ()=>{

    const connect = await client.connect();
    return await connect.db(dbName)
}