import { request } from "playwright";
import assert from "node:assert";

const context=await request.newContext();
const response=await context.delete("https://petstore.swagger.io/v2/pet/98889",
    {headers:{"api_key":"special-key"}});

console.log(response.status());
console.log(await response.json());