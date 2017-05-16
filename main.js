document.getElementById("urlsubmit").addEventListener("click",function(){
	document.getElementById("frame").src = document.getElementById("url").value;
	document.getElementById('bar').innerHTML = "";
	document.getElementById('feature').style.display = "block";
});

window.onresize = function(event) {
    document.getElementById('win_info').innerHTML = "weight: " + (window.innerWidth || document.body.clientWidth) + ", height: " + (window.innerHeight || document.body.clientHeight);
};
