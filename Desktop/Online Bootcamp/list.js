var todos = ["Buy New Turtle"]; 
var input = prompt("what would you like to do?");
while(input !== "quit"){
	//handle input
	if(input === "list") {
		listTodos();
} else if (input === "new"){
	newTodo();
}	else if(input === "delete"){
	deleteTodo();
}
//ask again fpor new input 
input = prompt("What would you like to do?");
}
console.log("OK, You quit the app");

function listTodos(){
	console.log("**********");
	todos.forEach(function(todo, i){
	console.log(i + ": " + todo);
	});
}

function newTodo(){
	//ask for new todo
	var newTodo = prompt("Enter a new todo");
	//add to array
	todos.push(newTodo);
	console.log("Added todo");
}

function deleteTodo(){
	//ask for index of todo to be deleted
	var index = prompt("Enter index of todo to be deleted:");
	//delete that todo
	todos.splice(index, 1);
	console.log("Deleted todo");

}