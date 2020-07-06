current_url=window.location.host 
chrome.storage.sync.get(['url_storage'], function(result) {

    let length_unit=Object.keys(result.url_storage).length;
    for(let i=0;i<length_unit;i++)
    {
        let main_domain_url=location.protocol+"//"+current_url+result.url_storage[i]
    let myRequest_http = new Request(main_domain_url);
        fetch(myRequest_http).then(function(response) {
       
        if(response.status=="200")
        {
            alert(response.status)
            var opt = {
                iconUrl: "notification.png",
                type: 'list',
                title: 'Primary Title',
                message: 'Primary message to display',
                priority: 1,
                items: [{ title: 'Item1', message: 'This is item 1.'},
                      { title: 'Item2', message: 'This is item 2.'},
                        { title: 'Item3', message: 'This is item 3.'}]
              };
              chrome.notifications.create('notify1', opt, function() { console.log('created!'); });
        }
      
        }
        )  
    }


})





