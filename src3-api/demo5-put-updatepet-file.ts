// Post - Add pet to store 
import { request } from "playwright";
import assert from "node:assert";
import fs from "node:fs";

const jsonObj=JSON.parse(fs.readFileSync("test-data/pet-data.json","utf-8"));
console.log(jsonObj["updatePet"]);

const reqBody=jsonObj["updatePet"];

const context=await request.newContext();
const response=await context.put("https://petstore.swagger.io/v2/pet",
    {data:reqBody,headers:{"Content-Type":"application/json"}});

console.log(response.status());
const responseBody=await response.json();
console.log(responseBody);