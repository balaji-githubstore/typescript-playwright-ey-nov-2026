function launchBrowser(url:string,option: { empId: number, empName?: string }): void {

}

launchBrowser("ggolceom.com",{ empId: 10, empName: "jack" });
launchBrowser("fb.com",{ empId: 10 })


interface LaunchOptions1 
{
    empId: number, 
    empName?: string 
};

function launchBrowser1(option?: LaunchOptions1): void {

}



launchBrowser1({empId:10,empName:"john"})

launchBrowser1();