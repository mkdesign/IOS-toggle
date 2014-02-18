window.onload= function	() {
	var iosToggle= document.getElementsByTagName('div');

	for(i=0;i<iosToggle.length;i++){

		iosToggle.item(i).hasAttribute("data-iostg").onclick= function(){

			alert(true);
		}	
			
		
	}
}