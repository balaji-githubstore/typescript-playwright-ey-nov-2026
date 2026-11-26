import fs from "node:fs";

// const text:string=fs.readFileSync("test-data/data.json","utf-8");
// const jsonObj=JSON.parse(text);

const jsonObj=JSON.parse(fs.readFileSync("test-data/data.json","utf-8"));

// console.log(jsonObj)

// console.log(jsonObj["invalidLoginData"])
// console.log(jsonObj["invalidLoginData"][0])
// console.log(jsonObj["invalidLoginData"][1])

// console.log(jsonObj["invalidLoginData"][0]["username"])


console.log(jsonObj["invalidLoginData"])


console.log()