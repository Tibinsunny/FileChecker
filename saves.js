chrome.storage.sync.get(['url_storage'], function(result) {
    
    var length_unit=Object.keys(result.url_storage).length;
    for(i=0;i<length_unit;i++)
    {
        document.getElementById('textareaid').value=result.url_storage[i]+"\n"+document.getElementById('textareaid').value
    }
  });