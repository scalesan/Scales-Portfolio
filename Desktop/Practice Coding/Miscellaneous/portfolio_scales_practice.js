function alterText(){
	var buttonToType = document.createElement("button");
	var buttonText = document.createTextNode("Click Here to capitalize text within text box below");
	buttonToType.appendChild(buttonText);
	var placement = document.getElementById("contactPageTextArea");
	placement.appendChild(buttonToType);
	var inputTextBox
	buttonToType.addEventListener('click', function(){var createLineBreak = document.createElement("br");inputTextBox = document.createElement("input");
	inputTextBox.style.height="100px";
	inputTextBox.style.width = "200px";
	inputTextBox.setAttribute("id", "inputTextBox");
	inputTextBox.setAttribute("value", "")
	placement.appendChild(document.createElement("p"));
	placement.appendChild(inputTextBox)}, false);
	buttonToType.onclick = function(){
    //disable
    this.disabled = true;} //Disables Button after clicking one time.
    placement = document.getElementById("contactPageTextArea");
    var submitButton = document.createElement("button");
    submitButton.setAttribute("id", "submitButton")
    var submitButtonText = document.createTextNode("Submit");
    submitButton.appendChild(submitButtonText);
    placement.appendChild(submitButton); 
	submitButton.addEventListener('click', function(){var currentText = inputTextBox.value; inputTextBox.value = document.getElementById('inputTextBox').style.textTransform=inputTextBox.value.toUpperCase();});	        
 }