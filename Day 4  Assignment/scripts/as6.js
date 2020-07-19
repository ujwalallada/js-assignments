
var num=Number(prompt("Enter any number and that should be more than 100",0));
while(true)
{
if(num>100 )
{
    console.log(`Hey you are intelligent!!!You have typed ${num}`);
    break;
}
else if(num<100 || num==0)
{
    var num=Number(prompt("Sorry sir please enter a number which is greater than 100"));
}

}