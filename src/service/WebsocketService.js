import { w3cwebsocket as WebSocketClient } from 'websocket';
import { endpointUrl } from '../request/Requests';
import UserService from './UserService';

const url = `ws://${endpointUrl}/stomp`;
const protocols = ['v10.stomp', 'v11.stomp'];

const wsProps = {
    client: null,
    connection: null,
}

export const initWebsocketConnection = () => {
    protocols.push(UserService.getToken());
    wsProps.client = new WebSocketClient(url, protocols);

    wsProps.client.onerror = error => {
        console.error(`Failed to connect to ${url}. Error`, error);
    };

    wsProps.client.onopen = connection => {
        console.log(`Client connected to ${url}. ConnectionObject:`, connection);
        wsProps.connection = connection;
    }

    wsProps.client.onclose = () => {
        console.warn(`Connection to ${url} is now closed`);
    };

    wsProps.client.onmessage = msg => {
        console.log(`Received message:`, msg);
    };
}

