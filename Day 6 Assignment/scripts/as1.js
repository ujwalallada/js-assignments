var i=0;
    var color= new Array("yellow","green","lightblue","pink");
    function change()
    {
        document.body.style.backgroundColor=color[i];
        i++;
        if(i>color.length)
        {
            i=0;
        }
        setInterval("change()",1000);
    }
    onload=change();