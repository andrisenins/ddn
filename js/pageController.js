var active = 'fixpixel';

function openMenu(id){
	
	if(id == 'home'){
		$("#" + active).fadeOut('fast');
        $("#home").fadeIn('fast');
	//	document.getElementById('home').style.display = 'inline';
	//	document.getElementById('fullmenu').style.display = 'none';
	}
	else{
        $("#home").fadeOut('fast');
    //    $("#fixpixel").fadeIn('fast');
	//	document.getElementById('home').style.display = 'none';
	//	document.getElementById('fullmenu').style.display = 'block';
		
		if (active == id) {
			$("#" + active).fadeIn('fast');
			return;
		}
		var items = ["we", "plan", "media", "qa"];
		if (items.indexOf(id) == -1) {
			return;
		}
		if (active == id) {
			$("#" + active).fadeOut("fast");
			return;
			console.log('active == id');
		}
		if (active != null) {
			$("#" + active).fadeOut("fast");
		}
		$("#" + active).fadeOut("slow", function() {
			$("#" + id).fadeIn("fast");
		});
		active = id;
		return false;
	}
}