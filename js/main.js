let contentBtn = document.querySelector('#displayContent');	
	contentBtn.addEventListener('click', displayContent, false);

let iconBtn = document.querySelector('.icon');
	iconBtn.addEventListener('click', showMenu, false);


	function displayContent(){			
	  let x = document.getElementById("profile");
	  if (x.innerHTML === "As a developer...") {
	    x.innerHTML = "As a developer, designing web applications for both front-end and back-end, creating user interfaces and forms using HTML5, CSS3, Bootstrap and, making conenctions to the back-end using JavaScript and J-query same as managing SQL databases running basic, complex queries and performing calculations using the SQL language using MySQL software.";
	  } else {
	    x.innerHTML ='As a developer...';
	    
	  }
	  if (contentBtn.value === "Learn More") {
	  		contentBtn.value = "Hide";
	  }
	  else{
	  		contentBtn.value = "Learn More";
	  }
	}

	function showMenu() {
	  var x = document.querySelector(".nav");
	  if (x.style.display === "none") {
	    x.style.display = "flex";
	  } else if(x.style.display === "flex") {
	    x.style.display = "none";
	  }
	  else{
	  	x.style.display = "flex";
	  }
	}

