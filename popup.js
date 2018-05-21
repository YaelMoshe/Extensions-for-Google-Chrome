document.addEventListener('DOMContentLoaded', function() 
{
	var keys = document.querySelectorAll('#calculator span'); // Get all the keys from document
	var operators = ['+', '-', '*', '/'];
	var decimalAdded = false;

	// Add onclick event to all the keys and perform operations
	for(var i = 0; i < keys.length; i++) 
	{
		keys[i].onclick = function(e) 
		{
			// Get the input and button values
			var input = document.querySelector('.resultbar');
			var inputVal = input.innerHTML;
			var btnVal = this.innerHTML;

			//Case: clear key pressed
			if(btnVal == 'C') 
			{
				input.innerHTML = '';
				decimalAdded = false;
			}
			//Case: eval key pressed
			else if(btnVal == '=') 
			{
				if(inputVal != '')
				{
					var equation = inputVal;
					var lastChar = equation[equation.length - 1];

					//Case: last character of the equation not decimal, remove it
					if(operators.indexOf(lastChar) > -1 || lastChar == '.')
					  equation = equation.replace(/.$/, '');

					//Calc equation
					input.innerHTML = eval(equation);
				}
				
				decimalAdded = false;
			}
			//Case: operator key pressed
			else if(operators.indexOf(btnVal) > -1) 
			{
				var lastChar = inputVal[inputVal.length - 1];

				//Case: no operator at the last & equation is not empty  
				if(inputVal != '' && operators.indexOf(lastChar) == -1) 
				{
					input.innerHTML += btnVal;
				}
				//Case: operator is minus & equation is empty
				else if(inputVal == '' && btnVal == '-') 
				{
					input.innerHTML += btnVal;
				}

				//Case: operator replace (exclude when its just minus)
				if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) 
				{
					input.innerHTML = inputVal.replace(/.$/, btnVal);
				}

				decimalAdded = false;
			}
			//Case: '.' key pressed 
			else if(btnVal == '.') 
			{
				if(!decimalAdded) 
				{
					input.innerHTML += btnVal;
					decimalAdded = true;
				}
			}
			//Case: decimal key pressed 
			else 
			{
				input.innerHTML += btnVal;
			}

			// prevent page jumps
			e.preventDefault();
		} 
	}

}, false); // 'DOMContentLoaded'
