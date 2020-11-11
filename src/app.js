const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// io.origins(['*']);
io.on('connection', socket => {
	socket.on('login', user => {
		console.log('newUser');
		io.sockets.emit('newUser', user);
	});

	socket.on('startGame', question => {
		console.log('newGame');
		io.sockets.emit('newGame', question);
	});

	socket.on('updatePoints', user => {
		console.log('receivePoints');
		io.sockets.emit('receivePoints', user);
	});

	socket.on('nextQuestion', question => {
		console.log('newQuestion');
		io.sockets.emit('newQuestion', question);
	});

	socket.on('validateAnswer', answer => {
		console.log('receiveAnswer');
		io.sockets.emit('receiveAnswer', answer);
	});

	socket.on('questionEnd', end => {
		console.log('receiveQuestionEnd');
		io.sockets.emit('receiveQuestionEnd', end);
	});

	socket.on('endGame', end => {
		console.log('receiveEndGame');
		io.sockets.emit('receiveEndGame');
	});

});

console.log("Porta", process.env.PORT);

http.listen(process.env.PORT || 3000, () => {
	console.log("Servidor no ar");
});
