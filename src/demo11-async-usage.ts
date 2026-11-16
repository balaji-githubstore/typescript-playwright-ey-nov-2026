export async function getDbConnection():Promise<string>
{
    //it takes 10 min to connect db 
    for(let i=1;i<=10;i++)
    {
        console.log(i);
        //current task will wait for 1 sec
        await new Promise(r=>setTimeout(r,1000)); 
    }
    return "DB connection started";
}

//since we are not using await. it will not wait for the method to complete 
// instead it triggers the method and move on to line 19

let runMethod=getDbConnection();
//getDbConnection(); is running i background because we are not using await
// let runMethod2=getDbConnection();
console.log("some other task like updating excel");
console.log("some other task like updating excel");
console.log("some other task like updating excel");
console.log("some other task like updating excel");
console.log("some other task like updating excel");

let output:string=await runMethod;
console.log(output);

// output=await runMethod2;
// console.log(output);