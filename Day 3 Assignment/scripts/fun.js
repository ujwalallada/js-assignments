var num=prompt("Enter a number");
check();
function check()
{
    if(num%2==0)
    {
        console.log("The entered number "+num+" is even!!!");
    }
    else
    {
        console.log("The entered number "+num+" is odd!!!");
    }
}