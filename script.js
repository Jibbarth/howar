/* Variables*/

urlToRefresh = "http://hautdebitmobile.orange.fr:8443.fr";


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




