import { request } from "playwright";
import assert from "node:assert";

const context=await request.newContext();
const response=await context.get("https://petstore.swagger.io/v2/pet/findByStatus?status=sold");

console.log(response.status());
const responseBody=await response.json();
console.log(responseBody);

// get first item and print it
console.log(responseBody[0]);
console.log(responseBody[0]["status"]);

for(let pet of responseBody)
{
    assert.deepStrictEqual(pet["status"],"sold");
}