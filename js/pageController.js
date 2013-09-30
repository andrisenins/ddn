var active = 'fixpixel';

function openMenu(id){
	
	if(id == 'home'){
		document.getElementById('home').style.display = 'inline';
		document.getElementById('fullmenu').style.display = 'none';
	}
	else{
		console.log('else');
		document.getElementById('home').style.display = 'none';
		document.getElementById('fullmenu').style.display = 'block';
		
		if (active == id) {
			return;
			console.log('active == id');
		}
		var items = ["we", "plan", "media", "qa"];
		if (items.indexOf(id) == -1) {
			return;
			console.log('index');
		}
		if (active == id) {
			$("#" + active).fadeOut("normal");
			return;
			console.log('active == id');
		}
		if (active != null) {
			$("#" + active).fadeOut("normal");
			console.log('active != null');
		}
		$("#" + active).fadeOut("slow", function() {
			$("#" + id).fadeIn("normal");
		});
		active = id;
		return false;
	}
}