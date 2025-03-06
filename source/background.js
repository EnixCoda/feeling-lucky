import addDomainPermissionToggle from "webext-permission-toggle";
import "webext-dynamic-content-scripts";
import browser from "webextension-polyfill";

addDomainPermissionToggle({
	title: "Enable Feeling Lucky on this domain",
	reloadOnSuccess: "Refresh to activate?"
});

browser.runtime.onInstalled.addListener(function() {
	browser.contextMenus.create({
		title: `Feeling lucky for "%s"`,
		contexts: ["selection"],
		id: "feeling-lucky"
	});
});

browser.contextMenus.onClicked.addListener(function(info) {
	const selectionText = info.selectionText;
	if (!selectionText) return;
	const search = new URLSearchParams({
		q: selectionText,
		btnI: ""
	});
	browser.tabs.create({
		url: "https://www.google.com/search?" + search.toString(),
		active: true
	});
});
