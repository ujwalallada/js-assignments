var gr=Number(prompt("How much mark did u score?"));
switch((gr > 60 && gr <= 100) ? 1 : 
(gr > 50 && gr < 60) ? 2 : 
(gr > 40 && gr < 50) ? 3 : 0 )
{
    case 1 :
        console.log("Marks are "+gr+" and grade is A+");
        break;
    case 2 :
        console.log("Marks are "+gr+" and grade is A");
        break;
    case 3 :
        console.log("Marks are "+gr+" and grade is B+");
        break;
    default:
        console.log("Marks are "+gr+" and grade is B");
}