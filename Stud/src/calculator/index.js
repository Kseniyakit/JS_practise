let memoryNumber = 0;

let countNumber = 0;

let check = true;

let isPointOn = true;

let isNegative = false;

let ressultFlag = true;

let flag = '';

let dubBtn = document.getElementById('dub');

let display = document.getElementById('talo');

let plusBtn = document.getElementById('plusBtn');

let minusBtn = document.getElementById('minusBtn');

let divideBtn = document.getElementById('divideBtn');

let multiplyBtn = document.getElementById('multiplyBtn');

let clearBtn = document.getElementById('del');

let ressultBtn = document.getElementById('equally');

let allBtns = document.querySelectorAll('.btn,.bigbuttonend_n');





for (let i = 0; i < allBtns.length; i++) {

    let btn = allBtns[i];

    btn.addEventListener('click', function(e) {

        clickNumber(e.target.value);

        console.log(e.target.value);

    });



}

let clickNumber = num => {

    if (check) {

        display.value = num;

        check = false;

    } else {

        display.value += num;

        displayCut(display.value);

    }

}



dubBtn.addEventListener('click', function(e) {

    for (let i = 0; i < display.value.length; i++) {

        if (display.value[i] === '.') {

            return;

        }

    }

    display.value += '.';

    check = false;

});

plusBtn.addEventListener('click', function() {

    lastOperation();

    memoryNumber = +display.value;

    flag = '+';

    check = true;

    isNegative = false;

    ressultFlag = true;

    console.log("+");

});

minusBtn.addEventListener('click', function() {

    lastOperation();

    memoryNumber = +display.value;

    flag = '-';

    check = true;

    ressultFlag = true;

    console.log("-");

});

divideBtn.addEventListener('click', function() {

    lastOperation();

    if (memoryNumber === 0 && display.value === '0') {



        display.value = '0';

    }

    if (isNaN(display.value) || isNaN(memoryNumber)) {



        display.value = '0';

    }

    memoryNumber = +display.value;

    flag = '/';

    check = true;

    ressultFlag = true;

    console.log("/");

});

multiplyBtn.addEventListener('click', function() {

    lastOperation();

    memoryNumber = +display.value;

    flag = '*';

    check = true;

    ressultFlag = true;

    console.log("*");

});

clearBtn.addEventListener('click', function() {

    display.value = 0;

    memoryNumber = 0;

    flag = '';

    check = true;

    ressultFlag = true;

    console.log("Clear");

})



function Summ(a, b) {

    if (typeof a !== 'number' || typeof b !== 'number') {

        return 'не число';

    } else {

        a += b;

        let d = String(a);

        a = cutDisplay(d);

        a = parseFloat(a);

        return a;

    }



}



function minus(a, b) {

    if (typeof a !== 'number' || typeof b !== 'number') {

        return 'не число';

    } else {

        a -= b;

        let d = String(a);

        a = cutDisplay(d);

        a = parseFloat(a);

        return a;

    }

}



function divide(a, b) {

    if (typeof a !== 'number' || typeof b !== 'number') {

        return 'не число';

    } else if (b === 0) {

        return 0;

    } else {

        a /= b;


        let d = String(a);

        n = cutDisplay(d);

        n = parseFloat(n).toFixed(2);

        return n;

    }



}



function multiply(a, b) {

    if (typeof a !== 'number' || typeof b !== 'number') {

        return 'не число';

    } else if (b === 0) {

        return 0;

    } else {

        a *= b;
        let n = a.toFixed(2);

        let d = String(n);

        n = cutDisplay(d);

        n = parseFloat(n);

        return n;

    }

}



ressultBtn.addEventListener('click', function() {

    if (ressultFlag) {

        countNumber = +display.value;

    }

    switch (flag) {

        case '+':

            memoryNumber = Summ(memoryNumber, countNumber);

            check = true;

            isPointOn = true;

            ressultFlag = false;

            break;

        case '-':

            memoryNumber = minus(memoryNumber, countNumber);

            check = true;

            isPointOn = true;

            ressultFlag = false;

            break;

        case '/':

            if (countNumber === 0) {

                memoryNumber = 0;

                display.value = countNumber;

            } else if (countNumber === '0') {

                memoryNumber = 0;

                display.value = countNumber;

            } else {

                memoryNumber = divide(memoryNumber, countNumber);

            }



            check = true;

            isPointOn = true;

            ressultFlag = false;

            break;

        case '*':

            memoryNumber = multiply(memoryNumber, countNumber);

            check = true;

            isPointOn = true;

            ressultFlag = false;

            break;

    }

    display.value = memoryNumber;

    displayCut(display.value);

    memoryNumber = 0;

    countNumber = 0;

});



function cutDisplay(a) {

    if (a.length > 10) {

        a = a.slice(0, 10);

    }

    return a;

}

function displayCut(a) {

    display.value = cutDisplay(a)

}



function lastOperation() {

    switch (flag) {

        case '+':

            if (check) {

                memoryNumber = display.value;

            } else {

                memoryNumber += +display.value;

            }

            display.value = memoryNumber;

            cutDisplay(display.value);

            break;

        case '-':

            if (check) {

                memoryNumber = display.value;

            } else {

                memoryNumber -= +display.value;

            }

            display.value = memoryNumber;

            cutDisplay(display.value);

            break;

        case '/':

            if (check) {

                memoryNumber = display.value;

            } else {

                memoryNumber /= +display.value;

            }

            display.value = memoryNumber;

            cutDisplay(display.value);

            break;

        case '*':

            if (check) {

                memoryNumber = display.value;

            } else {

                memoryNumber *= +display.value;

            }

            display.value = memoryNumber;

            cutDisplay(display.value);

            break;

    }

}
/*document.querySelectorAll('.calc-btn').forEach(function(button) {
     button.addEventListener("click", onButtonClick);
 });
 let textArea = document.getElementById('calc-display-val');
 let val = textArea.value;


 function onButtonClick(e) {

     if (e.target.innerHTML === 'AC') {
         return textArea.innerHTML = '0'
     } else if (e.target.innerHTML === "=") {
         return textArea.innerHTML = eval(textArea.innerHTML);
     } else if (textArea.innerHTML == "0") {

         return textArea.innerHTML = e.target.innerHTML;
     } else if (e.target.innerHTML === "÷" || e.target.innerHTML === "x") {
         return textArea.innerHTML += e.target.innerHTML.replace(/÷/g, '/').replace(/x/g, '*');
     } else {
         return textArea.innerHTML += e.target.innerHTML;
     }
 } */

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