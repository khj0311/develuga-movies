const PATH_AUTHOR = ['p6-ap-author.samsung.com', 'p6-eu-author.samsung.com', 'p6-us-author.samsung.com'];
const PATH_QAWEB = ['https://p6-qa.samsung.com', 'https://p6-pre-qa.samsung.com', 'https://p6-pre-qa3.samsung.com.cn'];

let isAuthor = false;
let isQaweb = false;

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    const tabId = tab.id;
    const tabUrl = tab.url;

    // Author
    const sitesButton = document.getElementById('aem-sites');
    const editorButton = document.getElementById('aem-editor');
    const previewButton = document.getElementById('aem-preview');

    // QAWEB
    const preqaButton = document.getElementById('aem-preqa');
    const preqa3Button = document.getElementById('aem-preqa3');
    const qawebButton = document.getElementById('aem-qaweb');

    const _checkEnv = () => {
        PATH_AUTHOR.forEach((path) => {
            if (tabUrl.indexOf(path) > -1) isAuthor = true;
        });

        PATH_QAWEB.forEach((path) => {
            if (tabUrl.indexOf(path) > -1) isQaweb = true;
        });
    };

    const _goToPath = (changeUrl) => {
        chrome.scripting.executeScript({
            target: {
                tabId: tabId,
            },
            func: (changeUrl) => {
                window.location.href = changeUrl;
            },
            args: [changeUrl],
        });
        window.close();
    };

    // Author
    sitesButton.addEventListener('click', () => {
        _checkEnv();

        if (!isAuthor && !isQaweb) return;

        if (isAuthor) {
            let changeUrl = tabUrl;

            if (tabUrl.indexOf('/sites.html/') > -1) {
                return;
            } else if (tabUrl.indexOf('/editor.html/') > -1) {
                changeUrl = changeUrl.replace('/editor.html/', '/sites.html/');
                let splitUrl = changeUrl.split('/');
                let lastUrl = splitUrl[splitUrl.length - 1];
                if (lastUrl.indexOf('.html') > -1) {
                    splitUrl[splitUrl.length - 1] = lastUrl.replace('.html', '');
                }
                changeUrl = splitUrl.join('/');
                _goToPath(changeUrl);
            } else {
                if (changeUrl.indexOf('?wcmmode=disabled') > -1) {
                    changeUrl = changeUrl.replace('?wcmmode=disabled', '');
                }
                let splitUrl = changeUrl.split('/');
                let lastUrl = splitUrl[splitUrl.length - 1];
                if (lastUrl.indexOf('.html') > -1) {
                    splitUrl[splitUrl.length - 1] = lastUrl.replace('.html', '');
                }
                splitUrl.splice(3, 0, 'sites.html');
                changeUrl = splitUrl.join('/');
                _goToPath(changeUrl);
            }
        }

        if (isQaweb) {
            let changeUrl = tabUrl;

            if (changeUrl.indexOf('https://p6-qa.samsung.com') > -1) {
                changeUrl = changeUrl.replace('https://p6-qa.samsung.com', 'https://p6-ap-author.samsung.com/sites.html/content/samsung');
            } else if (changeUrl.indexOf('https://p6-pre-qa.samsung.com') > -1) {
                changeUrl = changeUrl.replace('https://p6-pre-qa.samsung.com', 'https://p6-ap-author.samsung.com/sites.html/content/samsung');
            } else if (changeUrl.indexOf('https://p6-pre-qa3.samsung.com.cn/') > -1) {
                changeUrl = changeUrl.replace('https://p6-pre-qa3.samsung.com.cn/', 'https://p6-ap-author.samsung.com/sites.html/content/samsung/cn/');
            }

            let splitUrl = changeUrl.split('/');
            splitUrl.splice(splitUrl.length - 1, 1);
            changeUrl = splitUrl.join('/');
            _goToPath(changeUrl);
        }
    });

    editorButton.addEventListener('click', () => {
        _checkEnv();

        if (!isAuthor && !isQaweb) return;

        if (isAuthor) {
            let changeUrl = tabUrl;

            if (tabUrl.indexOf('/sites.html/') > -1) {
                changeUrl = changeUrl.replace('/sites.html/', '/editor.html/');
                let splitUrl = changeUrl.split('/');
                changeUrl = splitUrl.join('/') + '.html';
                _goToPath(changeUrl);
            } else if (tabUrl.indexOf('/editor.html/') > -1) {
                return;
            } else {
                if (changeUrl.indexOf('?wcmmode=disabled') > -1) {
                    changeUrl = changeUrl.replace('?wcmmode=disabled', '');
                }
                let splitUrl = changeUrl.split('/');
                splitUrl.splice(3, 0, 'editor.html');
                changeUrl = splitUrl.join('/');
                _goToPath(changeUrl);
            }
        }

        if (isQaweb) {
            let changeUrl = tabUrl;

            if (changeUrl.indexOf('https://p6-qa.samsung.com') > -1) {
                changeUrl = changeUrl.replace('https://p6-qa.samsung.com', 'https://p6-ap-author.samsung.com/editor.html/content/samsung');
            } else if (changeUrl.indexOf('https://p6-pre-qa.samsung.com') > -1) {
                changeUrl = changeUrl.replace('https://p6-pre-qa.samsung.com', 'https://p6-ap-author.samsung.com/editor.html/content/samsung');
            } else if (changeUrl.indexOf('https://p6-pre-qa3.samsung.com.cn/') > -1) {
                changeUrl = changeUrl.replace('https://p6-pre-qa3.samsung.com.cn/', 'https://p6-ap-author.samsung.com/editor.html/content/samsung/cn/');
            }

            let splitUrl = changeUrl.split('/');
            splitUrl.splice(splitUrl.length - 1, 1);
            splitUrl[splitUrl.length - 1] = splitUrl[splitUrl.length - 1] + '.html';
            changeUrl = splitUrl.join('/');
            _goToPath(changeUrl);
        }
    });

    previewButton.addEventListener('click', () => {
        _checkEnv();

        if (!isAuthor && !isQaweb) return;

        if (isAuthor) {
            let changeUrl = tabUrl;

            if (tabUrl.indexOf('/sites.html/') > -1) {
                changeUrl = changeUrl.replace('/sites.html/', '/');
                changeUrl += '.html?wcmmode=disabled';
                _goToPath(changeUrl);
            } else if (tabUrl.indexOf('/editor.html/') > -1) {
                changeUrl = changeUrl.replace('/editor.html/', '/');
                changeUrl += '?wcmmode=disabled';
                _goToPath(changeUrl);
            }
        }

        if (isQaweb) {
            let changeUrl = tabUrl;

            if (changeUrl.indexOf('https://p6-qa.samsung.com') > -1) {
                changeUrl = changeUrl.replace('https://p6-qa.samsung.com', 'https://p6-ap-author.samsung.com/content/samsung');
            } else if (changeUrl.indexOf('https://p6-pre-qa.samsung.com') > -1) {
                changeUrl = changeUrl.replace('https://p6-pre-qa.samsung.com', 'https://p6-ap-author.samsung.com/content/samsung');
            } else if (changeUrl.indexOf('https://p6-pre-qa3.samsung.com.cn/') > -1) {
                changeUrl = changeUrl.replace('https://p6-pre-qa3.samsung.com.cn/', 'https://p6-ap-author.samsung.com/content/samsung/cn/');
            }

            let splitUrl = changeUrl.split('/');
            splitUrl.splice(splitUrl.length - 1, 1);
            splitUrl[splitUrl.length - 1] = splitUrl[splitUrl.length - 1] + '.html?wcmmode=disabled';
            changeUrl = splitUrl.join('/');
            _goToPath(changeUrl);
        }
    });

    // QAWEB
    preqaButton.addEventListener('click', () => {
        _checkEnv();

        if (!isAuthor && !isQaweb) return;

        if (isAuthor) {
            let changeUrl = tabUrl;

            if (tabUrl.indexOf('/sites.html/') > -1) {
                changeUrl = changeUrl.replace('https://p6-ap-author.samsung.com/sites.html/content/samsung', 'https://p6-pre-qa.samsung.com');
                _goToPath(changeUrl);
            } else if (tabUrl.indexOf('/editor.html/') > -1) {
                changeUrl = changeUrl.replace('https://p6-ap-author.samsung.com/editor.html/content/samsung', 'https://p6-pre-qa.samsung.com');
                changeUrl = changeUrl.replace('.html', '/');
                _goToPath(changeUrl);
            } else {
                changeUrl = changeUrl.replace('https://p6-ap-author.samsung.com/content/samsung', 'https://p6-pre-qa.samsung.com');
                changeUrl = changeUrl.replace('.html?wcmmode=disabled', '/');
                _goToPath(changeUrl);
            }
        }

        if (isQaweb) {
            let changeUrl = tabUrl;

            if (changeUrl.indexOf('https://p6-qa.samsung.com') > -1) {
                changeUrl = changeUrl.replace('https://p6-qa.samsung.com', 'https://p6-pre-qa.samsung.com');
            } else if (changeUrl.indexOf('https://p6-pre-qa.samsung.com') > -1) {
                return;
            } else if (changeUrl.indexOf('https://p6-pre-qa3.samsung.com.cn/') > -1) {
                changeUrl = changeUrl.replace('https://p6-pre-qa3.samsung.com.cn/', 'https://p6-pre-qa.samsung.com/cn/');
            }

            _goToPath(changeUrl);
        }
    });

    preqa3Button.addEventListener('click', () => {
        _checkEnv();

        if (!isAuthor && !isQaweb) return;

        if (isAuthor) {
            let changeUrl = tabUrl;

            if (tabUrl.indexOf('/sites.html/content/samsung/cn/') > -1) {
                changeUrl = changeUrl.replace('https://p6-ap-author.samsung.com/sites.html/content/samsung/cn/', 'https://p6-pre-qa3.samsung.com.cn/');
                _goToPath(changeUrl);
            } else if (tabUrl.indexOf('/editor.html/content/samsung/cn/') > -1) {
                changeUrl = changeUrl.replace('https://p6-ap-author.samsung.com/editor.html/content/samsung/cn/', 'https://p6-pre-qa3.samsung.com.cn/');
                changeUrl = changeUrl.replace('.html', '/');
                _goToPath(changeUrl);
            } else if (tabUrl.indexOf('/content/samsung/cn/') > -1) {
                changeUrl = changeUrl.replace('https://p6-ap-author.samsung.com/content/samsung/cn/', 'https://p6-pre-qa3.samsung.com.cn/');
                changeUrl = changeUrl.replace('.html?wcmmode=disabled', '/');
                _goToPath(changeUrl);
            } else {
                return;
            }
        }

        if (isQaweb) {
            let changeUrl = tabUrl;
            let splitUrl = changeUrl.split('/');

            if (splitUrl[3] === 'cn') {
                if (changeUrl.indexOf('https://p6-qa.samsung.com/cn/') > -1) {
                    changeUrl = changeUrl.replace('https://p6-qa.samsung.com/cn/', 'https://p6-pre-qa3.samsung.com.cn/');
                } else if (changeUrl.indexOf('https://p6-pre-qa.samsung.com/cn/') > -1) {
                    changeUrl = changeUrl.replace('https://p6-pre-qa.samsung.com/cn/', 'https://p6-pre-qa3.samsung.com.cn/');
                } else if (changeUrl.indexOf('https://p6-pre-qa3.samsung.com.cn/') > -1) {
                    return;
                }
            } else {
                return;
            }

            _goToPath(changeUrl);
        }
    });

    qawebButton.addEventListener('click', () => {
        _checkEnv();

        if (!isAuthor && !isQaweb) return;

        if (isAuthor) {
            let changeUrl = tabUrl;

            if (tabUrl.indexOf('/sites.html/') > -1) {
                changeUrl = changeUrl.replace('https://p6-ap-author.samsung.com/sites.html/content/samsung', 'https://p6-qa.samsung.com');
                _goToPath(changeUrl);
            } else if (tabUrl.indexOf('/editor.html/') > -1) {
                changeUrl = changeUrl.replace('https://p6-ap-author.samsung.com/editor.html/content/samsung', 'https://p6-qa.samsung.com');
                changeUrl = changeUrl.replace('.html', '/');
                _goToPath(changeUrl);
            } else {
                changeUrl = changeUrl.replace('https://p6-ap-author.samsung.com/content/samsung', 'https://p6-qa.samsung.com');
                changeUrl = changeUrl.replace('.html?wcmmode=disabled', '/');
                _goToPath(changeUrl);
            }
        }

        if (isQaweb) {
            let changeUrl = tabUrl;

            if (changeUrl.indexOf('https://p6-qa.samsung.com') > -1) {
                return;
            } else if (changeUrl.indexOf('https://p6-pre-qa.samsung.com') > -1) {
                changeUrl = changeUrl.replace('https://p6-pre-qa.samsung.com', 'https://p6-qa.samsung.com');
            } else if (changeUrl.indexOf('https://p6-pre-qa3.samsung.com.cn/') > -1) {
                changeUrl = changeUrl.replace('https://p6-pre-qa3.samsung.com.cn/', 'https://p6-qa.samsung.com/cn/');
            }

            _goToPath(changeUrl);
        }
    });
});
