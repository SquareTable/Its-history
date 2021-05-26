document.getElementById('switchforextension').addEventListener('click', function() {
    var x = document.getElementById('switchforextension');
    var ischeckboxchecked = x.checked;
    console.log(ischeckboxchecked)
    console.log(x.checked)
    if (x.checked == true) {
        localStorage.setItem("stateOfExtensionCheckbox", ischeckboxchecked);
        console.log("The if statement says the checkbox is checked");
    }
    else {
        localStorage.setItem("stateOfExtensionCheckbox", ischeckboxchecked);
        console.log("The if statement says the checkbox is not checked");
    }
});

document.getElementById('switchformadsussyhistoryremover').addEventListener('click', function() {
    var x = document.getElementById('switchformadsussyhistoryremover');
    var ischeckboxchecked = x.checked;
    console.log(ischeckboxchecked)
    console.log(x.checked)
    if (x.checked == true) {
        localStorage.setItem("stateOfMadSussyHistoryRemoverCheckbox", ischeckboxchecked);
        console.log("The if statement says the mad sussy history remover checkbox is checked");
    }
    else {
        localStorage.setItem("stateOfMadSussyHistoryRemoverCheckbox", ischeckboxchecked);
        console.log("The if statement says the mad sussy history remover checkbox is not checked");
    }
});

window.onload = function() {
    var y = document.getElementById('switchforextension');
    var localstoragepull = localStorage.getItem("stateOfExtensionCheckbox");
    if (localstoragepull == "true") {
        y.checked = true;
    }
    else {
        y.checked = false;
    };
    var y = document.getElementById('switchformadsussyhistoryremover');
    var localstoragepull = localStorage.getItem("stateOfMadSussyHistoryRemoverCheckbox");
    if (localstoragepull == "true") {
        y.checked = true;
    }
    else {
        y.checked = false;
    };
    if (y.checked == true) {
        /*Mad sussy history remover
        var callback = function() {
            alert("History clear function started");
        };
        var millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
        var oneWeekAgo = (new Date()).getTime() - millisecondsPerWeek;
        chrome.browsingData.remove({
        "since": oneWeekAgo
        }, {
        "appcache": true,
        "cache": true,
        "cacheStorage": true,
        "cookies": true,
        "downloads": true,
        "fileSystems": true,
        "formData": true,
        "history": true,
        "indexedDB": true,
        "localStorage": true,
        "passwords": true,
        "serviceWorkers": true,
        "webSQL": true
        }, callback);
        */
    }
};