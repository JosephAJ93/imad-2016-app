var button=document.getElementById('mainbutton');
var counter = 0;
button.onclick = function () {
    
    
    counter = counter + 1;
    var div=document.getElementById('span');
    div.innerHTML = counter.toString();
    
};
