 document.querySelectorAll('.calc-btn').forEach(function(button){
	button.addEventListener("click", onButtonClick);
});
let textArea = document.getElementById('calc-display-val');
let val = textArea.value;
if (val === Infinity){
	 textArea.innerHTML = "";
}
 
function onButtonClick(e){

	if(e.target.innerHTML === 'AC'){
	return	textArea.innerHTML = '0'
	}
	else if (e.target.innerHTML ==="="){
	return	textArea.innerHTML = eval(textArea.innerHTML);
	}

	 else if (textArea.innerHTML  == "0"){
		
	return	textArea.innerHTML = e.target.innerHTML;
	}
	else if(e.target.innerHTML ==="÷"||e.target.innerHTML ==="x"){
	return	textArea.innerHTML += e.target.innerHTML.replace(/÷/g, '/').replace(/x/g, '*');
	}
	
	else {
	return	textArea.innerHTML += e.target.innerHTML;
	}
}

/* let keys = document.querySelectorAll('.calc-btn');
let operators = ['+', '-', 'x', '÷'];
let decimalAdded = false;


for(let i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		
		let input = document.querySelector('#calc-display-val');
		let inputVal = input.innerHTML;
		let btnVal = this.innerHTML;
		let total;
		if (inputVal == "0"){
			input.innerHTML ='';
			decimalAdded = false;
		}
		if(btnVal == 'AC') {
			input.innerHTML = '';
			decimalAdded = false;
		}
		
		else if(btnVal == '=') {
			let equation = inputVal;
			let lastChar = equation[equation.length - 1];
			
			equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
			
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');
			
			if(equation){
             total = eval(equation);
              if(total.toString().indexOf('.') != -1)
                total= total.toFixed(2);
          
          input.innerHTML = total;
        }
				
			decimalAdded = false;
		}
		
		else if(operators.indexOf(btnVal) > -1) {
			
			let lastChar = inputVal[inputVal.length - 1];
			
			if(inputVal != '' && operators.indexOf(lastChar) == -1) {
		
				input.innerHTML += btnVal;
			}
			else if(inputVal == '' && btnVal == '-') 
				input.innerHTML += btnVal;
			
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}
			
			decimalAdded =false;
		}
		
		else if(btnVal == '.') {
			if(!decimalAdded) {
				input.innerHTML += btnVal;
				decimalAdded = true;
			}
		}
		
		else {
			input.innerHTML += btnVal;
		}
		
	} 
} */