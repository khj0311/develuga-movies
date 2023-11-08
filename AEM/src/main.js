const PATH_AUTHOR = ['p6-ap-author.samsung.com', 'p6-eu-author.samsung.com', 'p6-us-author.samsung.com'];
const PATH_QAWEB = ['p6-qa.samsung.com', 'p6-pre-qa.samsung.com'];

let isAuthor = false;
let isQaweb = false;

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    const tabId = tab.id;
    const tabUrl = tab.url;

    const sitesButton = document.getElementById('aem-sites');
    const editorButton = document.getElementById('aem-editor');
    const previewButton = document.getElementById('aem-preview');

    sitesButton.addEventListener('click', function () {
        PATH_AUTHOR.forEach(function (path) {
            if (tabUrl.indexOf(path) > -1) isAuthor = true;
        });

        PATH_QAWEB.forEach(function (path) {
            if (tabUrl.indexOf(path) > -1) isQaweb = true;
        });

        if (!isAuthor && !isQaweb) return;

        if (isAuthor) {
            const splitUrl = tabUrl.split('/');
            if (splitUrl[3].indexOf('sites.html') > -1) {
                return;
            } else if (splitUrl[3].indexOf('editor.html') > -1) {
                let changeUrl = tabUrl.replace('editor.html', 'sites.html');
                chrome.scripting.executeScript((abc) => {
                    console.log('asd');
                    console.log(abc);
                    // window.location.href = changeUrl;
                });
                tab.url = changeUrl;
            } else {
            }
        }
    });
});
console.log(chrome);
