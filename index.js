const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {

    var authList = [];

    console.log('a user is connected: ', socket.id);
    // socket.handshake.headers maybe token after headers

    socket.on('client-auth', (data) => {
        /**
         * data will contain sid - session id.
         * send a request to django to check if the user with this session id is logged in
         * emit client-auth-result with data = {success: <value of is-logged-in>}
         */
    });

    socket.on('message-from-server', (data) => {
        console.log('data.token: ', data.token);
        socket.emit('message-to-client', {
            ...data,
            extra: 'things..'
        });
    });
});

http.listen(3000, () => {
    console.log('Server started at PORT: 3000');
});
