//number, boolean, string 
let a: number = 10; //a is reserved for number 
let b: boolean = true; //b is reserved for boolean 
let myName: string = "jack"; //c is reserved for string 

a = 10.2

console.log(a);
console.log(myName);

let c: number = 99.4;

let result: number = a + c;
console.log(result);



let radius: number = 10;
// calcuate area of circle - 
//3.14

result = 3.14 * radius * radius;

console.log(result);
console.log("The output is " + result);
console.log("The result is", result);
console.log(`The area of circle for radius ${radius} is ${result}`)

let topic: string;
topic = "hello";

console.log(topic);
console.log(topic.length);
console.log(topic.toUpperCase());
console.log(topic.charAt(0));

console.log(typeof topic);
console.log(typeof a);
console.log(typeof b);

let marks: number[] = [23, 45.4, 55, 66, 77];

// print length 
console.log(marks.length);
//get the second item and print 
console.log(marks[1]);


//object type 
let browserDetail: { browserName: string, browserVersion: number, isMobile: boolean } = { browserName: "chrome", browserVersion: 102.3, isMobile: false };

console.log(browserDetail);
console.log(browserDetail.browserName);
console.log(browserDetail.browserVersion);
console.log(browserDetail.isMobile);

//create employeeDetail {name,age,role,mobileNumber}
let employeeDetail: { name: string, age: number, role: string, mobileNumber: number[] };

employeeDetail = { name: "jack", age: 22, role: "QA", mobileNumber: [988889, 88888] };


console.log(employeeDetail.name);
console.log(employeeDetail.mobileNumber);
console.log(employeeDetail.mobileNumber[1]);

//union
let policyNumber: number | string;
policyNumber = 100304;
policyNumber = "kjjj334jj33";


//tuple
//fixed number of elements
//each position specific type 
//order must be follower
let data: [number, string];
data = [101, "jack"]

console.log(data);
console.log(data[1]);

//any - not recommended
let x: any = 10;
x = true;
x = "John";


//unknown - recommended
let z: unknown = 10;
z = true;
z = "John";

console.log(x.toUpperCase());

//unknown - force user to do type  check before using it 
if (typeof z === "string") {
    console.log(z.toUpperCase());
}


const x1:number=10;

