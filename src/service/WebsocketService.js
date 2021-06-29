import io from 'socket.io-client';
import { socketUrl } from '../request/Requests';
import UserService from './UserService';

const wsProps = {
    client: null,
    connection: null,
};

export const initWebsocketConnection = () => {
    const url = `http://${socketUrl}/botosocket`;
    const socket = io(url, {
        query: {
            token: UserService.getToken(),
        }
    });

    socket.on('connect', function () {
        console.log('<span class="connect-msg">The client has connected with the server.');
    });
    socket.on('chat', function (data) {
        console.log('Received message', data);
        console.log('<span class="username-msg">' + data.userName + ':</span> ' + data.message);
    });
    socket.on('disconnect', function () {
        console.log('<span class="disconnect-msg">The client has disconnected!</span>');
    });
    socket.on('reconnect_attempt', (attempts) => {
        console.log('Try to reconnect at ' + attempts + ' attempt(s).');
    });

    socket.on("connect_error", (reason) => {
        console.log(reason.message, reason.name, reason.stack)
    });

    wsProps.client = socket;
}

export const sendMessage = (msg = {}) => {
    try {
        wsProps.client.send(JSON.stringify(msg))
        wsProps.client.send(JSON.stringify(msg))
    } catch(e) {
        console.error('Error sending message:', e);
    }
}
