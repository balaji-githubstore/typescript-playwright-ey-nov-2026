/*
Example for - Get request with path parameter 

Base URL - https://petstore.swagger.io/v2


Find Pet by ID - Example for Path parameter 
Resource - /pet/{PetId} 

*/
import { request } from "playwright";
import assert from "node:assert";

const context=await request.newContext();
const response=await context.get("https://petstore.swagger.io/v2/pet/5");

console.log(response.status());
console.log(await response.json());

const responseBody=await response.json();
console.log(responseBody["id"]);
console.log(responseBody["name"]);
console.log(responseBody["status"]);


assert.deepStrictEqual(response.status(),200);
assert.deepStrictEqual(responseBody["id"],5);
assert.deepStrictEqual(responseBody["name"],"doggie");