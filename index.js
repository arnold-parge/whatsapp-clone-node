const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.send('Welcome to the node server of whatsapp clone!');
});

io.on('connection', function (socket) {

    var authList = [];

    console.log('a user is connected: ', socket.id);
    // socket.handshake.headers maybe token after headers

    socket.on('client-auth', function (data) {
        /**
         * data will contain sid - session id.
         * send a request to django to check if the user with this session id is logged in
         * emit client-auth-result with data = {success: <value of is-logged-in>}
         */
    });

    socket.on('send-message', function (data) {
        socket.emit('get-message', data);
    });
});

var port = process.env.PORT || 3000

console.log('PORT IS: ', port);

http.listen(port, function () {
    console.log('Server started at PORT: ', port);
});
