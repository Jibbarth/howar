/* Variables*/

urlToRefresh = "http://jibébarth.fr";


   //
   chrome.tabs.create({"url":urlToRefresh,"selected":false},function(tab){
   		console.log("reconnect..");
   		 createdTabId = tab.id;
    	 setInterval(function(){chrome.tabs.update(createdTabId,{url:urlToRefresh})},900000);
    });  
   	//while(createdTabId == 0){
   	//	console.log("wait...");
   //	}
    
 // reconnect(); 




