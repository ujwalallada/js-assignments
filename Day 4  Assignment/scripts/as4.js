alert("If you want to square root then write the second number as 0");
var n1=Number(prompt("Enter first number"));
var n2=Number(prompt("Enter second number"));
var r=prompt("Enter the operation you want to proceed");
switch(r)
{
    case '+':
        console.log(n1+n2);
        break;
    case '-':
        console.log(n1-n2);
        break;
    case '*':
        console.log(n1*n2);
        break;
    case '/':
        console.log(n1/n2);
        break;
    case '%':
        console.log((n1/100)*n2);
        break;
    case 'sqrt':
        console.log(Math.sqrt(n1));
    default:
        console.log("Oh god save me");
        
}