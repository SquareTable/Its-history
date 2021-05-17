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

window.onload = function() {
    var y = document.getElementById('switchforextension');
    var localstoragepull = localStorage.getItem("stateOfExtensionCheckbox")
    if (localstoragepull == "true") {
        y.checked = true;
    }
    else {
        y.checked = false;
    }
};