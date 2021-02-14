chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.contentScriptQuery == 'queryPrice') {
            var url = 'https://another-site.com/price-query?itemId=' +
                encodeURIComponent(request.itemId);
            fetch(url)
                .then(response => response.text())
                .then(text => parsePrice(text))
                .then(price => sendResponse(price))
            // .catch(error => ...)
            return true;  // Will respond asynchronously.
        }
    });