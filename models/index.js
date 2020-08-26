var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb+srv://don:donnn123@cluster0-zzdjv.mongodb.net/test?retryWrites=true&w=majority' , {
	useNewUrlParser: true
	
}).then(()=>{
	console.log("db connected")
}).catch(err =>{
	console.log("error",err.message)
});


mongoose.Promise = Promise;

module.exports.Todo = require("./todo");