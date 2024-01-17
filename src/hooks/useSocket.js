import { Client } from '@stomp/stompjs';
import { useRef } from 'react';

const useSocket = ({ url, destination, callback }) => {
    const stompRef = useRef(null);
    const client = new Client({
        brokerURL: url,
    })

    const connect = () => {
        if (stompRef.current) return;

        stompRef.current = client;

        client.activate();

        client.onConnect = () => {
            client.subscribe(destination, (message) => {
                try {
                    callback(JSON.parse(message.body));
                } catch (error) {
                    throw new Error('소켓이 제대로 연결되지 않았어요')
                }
            })
        }
    }

    const disconnect = () => {
        if (!stompRef.current) return;

        client.deactivate();
    };
    return { connect, disconnect, stompRef }
}

export default useSocket;