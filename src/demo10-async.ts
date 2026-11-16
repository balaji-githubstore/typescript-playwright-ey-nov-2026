export async function sayHello():Promise<string>
{
    return "Hello";
}

export async function getRandomNumber():Promise<number>
{
    return 3;
}


let output:string=await sayHello();
console.log(output);

let x:number=await getRandomNumber();
console.log(x);