$(document).ready(function(){
	$.getJSON("/api/todos")
	.then(showTodos)
	.catch(function(err){
		console.log(err)
	});
	
	
	$("#todoInput").keypress(function(event){
		if(event.which == 13){
			createTodo();
		}
	})
	
	$(".list").on("click" ,"span", function(){
		// var clickedId = ;
		removeTodo($(this).parent());
	})
	
})


function showTodos(todos){
	todos.forEach(function(todo){
		addTodo(todo)
	})
	
}

function addTodo(todo){
	var newTodo = $("<li class ='task'>" +todo.name +"<span>X</span></li>");
	newTodo.data("id",todo._id);
		if(todo.completed){
			newTodo.addClass("done");
		}
		$( ".list" ).append(newTodo )
}

function createTodo(){
	var input = $("#todoInput").val();
	$.post("/api/todos" , {name:input})
	.then(function(newTodo){
		$('#todoInput').val("")
		addTodo(newTodo);
	})
}

function removeTodo(todoId){
	var clickedId = todoId.data("id")
	var delUrl = "/api/todo/" + clickedId;
	console.log(delUrl)
	$.ajax({
		url: delUrl,
		type: 'DELETE',
		
	})
	.then(function(data){
		todoId.remove();
	})
	.catch(function(err){
		console.log(err)
	})
}






