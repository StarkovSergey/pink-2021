function testWebP(e){var A=new Image;A.onload=A.onerror=function(){e(2==A.height)},A.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"}testWebP((function(e){1==e?document.querySelector("body").classList.add("_webp"):document.querySelector("body").classList.add("_no-webp")}));