// Post - Add pet to store 
import { request } from "playwright";
import assert from "node:assert";

const reqBody={
    "id": 9888,
    "category": {
        "id": 0,
        "name": "string"
    },
    "name": "doggie-9888",
    "photoUrls": [
        "string"
    ],
    "tags": [
        {
            "id": 0,
            "name": "string"
        }
    ],
    "status": "available"
}

const context=await request.newContext();
const response=await context.post("https://petstore.swagger.io/v2/pet",
    {data:reqBody,headers:{"Content-Type":"application/json"}});

console.log(response.status());
const responseBody=await response.json();
console.log(responseBody);