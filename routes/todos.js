var express = require('express');
var app = express();
var router = express.Router();
var db = require("../models")
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json({ extended: true }));

router.get('/',function(req,res){
	db.Todo.find()
	.then(function(todolist){
		res.json(todolist)
	})
	.catch(function(err){
		res.send(err)
	})
});

router.post('/', function(req,res){
	db.Todo.create(req.body)
  .then(function(newTodo){
      res.status(201).json(newTodo);
  })
  .catch(function(err){
      res.send(err);
  })
});

router.get('/:todoId',function(req,res){
   db.Todo.findById(req.params.todoId)
   .then(function(foundTodo){
       res.json(foundTodo);
   })
   .catch(function(err){
       res.send(err);
   })
})

router.put('/:todoId' , function(req,res){
   db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
   .then(function(todo){
       res.json(todo);
   })
   .catch(function(err){
       res.send(err);
   })
	
	
});

router.delete('/:todoId' , function(req,res){
	db.Todo.remove({_id:req.params.todoId})
	.then(function(){
		res.json({message: "deleted"})
	})
	.catch(function(err){
		res.json(err)
	})
})


module.exports = router;