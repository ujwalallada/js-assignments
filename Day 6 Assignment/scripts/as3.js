var x=prompt("What is your name?");

document.write(`Welcome ${x} to the world of Letsupgrade!!!`);

const ti=document.getElementById("time");

function clock()
{
    let date = new Date();
    let time =date.toLocaleTimeString();
    ti.innerText = time;

}
setInterval(clock,1000);
function myFunction()
{
    var element =document.body;
    element.classList.toggle("dark-mode");
}