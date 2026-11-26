class Demo1
{
    //static variable or class variable 
    public static aS:number=10;
    public static bS:number=20;

    //non-static variable or instance variable 
    public aNS:number=10;
    public bNS:number=20;

}


console.log(Demo1.aS);
Demo1.aS=1000;
console.log(Demo1.aS);
console.log(Demo1.bS);


let obj1:Demo1=new Demo1();
let obj2:Demo1=new Demo1();

obj1.aNS=5000;
console.log(obj1.aNS);
console.log(obj1.bNS);

console.log(obj2.aNS);
console.log(obj2.bNS);