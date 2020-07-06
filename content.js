var names=[]
$('.button').click(function(){

    let lines = document.getElementById("textareaid").value.split('\n');
    for(let i = 0;i < lines.length;i++){
        //code here using lines[i] which will give you each line
        names[i]=lines[i]
        
    }

    chrome.storage.sync.set({"url_storage": names}, function() {
    });
     
      });




