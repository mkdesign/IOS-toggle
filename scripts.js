window.onload= function	() {
	var iosToggle= document.getElementsByTagName('div');

	

	for(i=0;i<iosToggle.length;i++){

		(function(j){

			iosToggle.item(j).onclick= function(){


				if(iosToggle.item(j).hasAttribute("data-iostg")){
					alert(1)
				}
			}
		})(i)
			
	}

}