var sales=Number(prompt("Enter the number of sales!!!"));
//since salary is unknown lets consider com=10000
var com=10000;
if(sales>=0 && sales <=5000)
{
    com =com+com*0.02;
    console.log(com);
}
else if(sales>=5001 && sales <=10000)
{
    com =com+com*0.05;
    console.log(com);    
}
else if(sales>=10001 && sales <=20000)
{
    com =com+com*0.07;
    console.log(com);
}
else
{
    com =com+com*0.1;
    console.log(com);
}
