chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    chrome.pageAction.show(tabId);
    chrome.pageAction.setTitle({
        tabId: tab.id,
        title: "webmBed On/Off"
    });
});


// Check whether new version is installed
chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
        console.log("This is a first install!");
        chrome.storage.sync.set({"webm": true},function (){
});
    }else if(details.reason == "update"){
        var thisVersion = chrome.runtime.getManifest().version;
        localStorage.be_a_buzzkill = true;
        console.log(localStorage);
        chrome.storage.sync.set({"webm": true},function (){
});
        console.log("Updated from " + details.previousVersion + " to " + thisVersion + "!");
    }
});

// chrome.storage.local.set({"tweet": true, "vine":true, "filter":true},function (){
// });



