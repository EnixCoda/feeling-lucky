chrome.runtime.onInstalled.addListener(function() {
	chrome.contextMenus.create({
		title: `Feeling lucky for "%s"`,
		contexts: ["selection"],
		id: "feeling-lucky"
	});
});

chrome.contextMenus.onClicked.addListener(function(info) {
	const selectionText = info.selectionText;
	if (!selectionText) return;
	const search = new URLSearchParams({
		q: selectionText,
		btnI: ""
	});
	chrome.tabs.create({
		url: "http://www.google.com/search?" + search.toString(),
		active: true
	});
});
