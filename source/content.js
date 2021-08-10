const { hostname, pathname, searchParams } = new URL(window.location.href);

// check href, like google.com/url?q=...
if (
	hostname.split(".").includes("google") &&
	pathname.startsWith("/url") &&
	searchParams.has("q")
) {
	const href = document.querySelector("a").href;
	document.body.innerHTML = `<a href="${href}">Redirecting...</a>`;
	location.href = href;
}
