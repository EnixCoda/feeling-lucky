const href = document.querySelector("a").href;
document.body.innerHTML = `<a href="${href}">Redirecting...</a>`;
location.href = href;
