function areaOfCircle(radius:number):number
{
    return 3.14*radius*radius;
}

function areaOfRectangle(length:number,width:number):number
{
    return length*width;
}

//areaOfTriangle
function areaOfTriangle(height:number,base:number):number
{
    return (base*height)/2;
}

//areaOfSquare
function areaOfSquare(side:number)
{
    return side*side;
}


//while calling the methods - check for arguments and return type

let output:number=areaOfCircle(10);
console.log(output);

output=areaOfCircle(20);
console.log(output);

console.log(areaOfCircle(30));

output=areaOfRectangle(2,2);
console.log(output);
console.log(areaOfRectangle(100,100));

console.log(areaOfTriangle(12,3));