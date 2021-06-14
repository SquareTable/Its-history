/* This is here just in case we need to add JS to the extension page */
function show_video_demonstration() {
    var x = document.getElementById('video_demonstration');
    if(x.className == "invisible") {
        x.className = "visible";
        var x = document.getElementById('video_demonstration_showhide_button');
        x.textContent = "Hide video demonstration";
    }
    else {
        x.className = "invisible";
        var x = document.getElementById('video_demonstration_showhide_button');
        x.textContent = "Show video demonstration";
    }
}
window.onload = function() {
    /*onload code goes here */
}