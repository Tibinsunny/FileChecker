var names=[]
document.querySelector(".button").onclick=function(){

    var lines = document.getElementById("textareaid").value.split('\n');

    for(var i = 0;i < lines.length;i++){
        //code here using lines[i] which will give you each line
        names[i]=lines[i]
    }
    localStorage.setItem("url_storage", JSON.stringify(names));
 
}