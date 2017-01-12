window.onload = function init() {	
	var buttons = document.querySelectorAll('.button')//select all buttons
	var result = document.getElementById('placeholder')//select result field 
	//var clear = document.getElementsByClassName('clear')//select clear button
	var self = this

	for(var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", 
			function() {
				switch(this.innerHTML){
					case "AC":
						self.clear()
						break
					case "=":
						self.equal()
						break
					default:
						result.value =
							result.value + this.innerHTML
						break
				}
			})

		// equal	 
		this.equal = function(){
			result.value = eval(result.value)
		}
		//clear 
		this.clear = function(){
			result.value = ""
		}
	}
}

