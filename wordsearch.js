
function onRequest(info, tab) {
	var selection = info.selectionText;
//do something with the selection
if(selection){
	var serviceCall = 'https://developer.mozilla.org/en-US/search?q=' + encodeURIComponent(selection);
	chrome.tabs.create({url: serviceCall});
}
};

chrome.contextMenus.create({
	id: "word_search",
	contexts: ["selection"],
	title: "Search MDN Web Docs",
	"onclick" : onRequest
});
