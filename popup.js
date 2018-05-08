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
			
			// prevent page jumps
			e.preventDefault();
		} 
	}

}, false); // 'DOMContentLoaded'
