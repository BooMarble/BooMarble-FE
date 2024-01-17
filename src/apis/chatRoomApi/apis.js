import { Client } from '@stomp/stompjs';
import { useRef } from 'react';
import { createRef, useEffect } from 'react';
import  useSocket  from '../../hooks/useSocket';
import axios from 'axios';

// 최초 접속 시 채팅방 생성
// 채팅 이미지 클릭 시 아래 함수 호출
const useChatRoom = async (anotherUserId) => {
    
    const { connect, disconnect } = useSocket({
        url: 'wss://boomarble.com/ws',
        destination: `/topic/chat/room`,
        callback: (message) => {
            console.log('Received message:', message);
        }
    })

    useEffect(() => {
        const sendHeaders = {
            'X-AUTH-TOKEN' : 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNTQxMTkzNCwiZXhwIjoxNzA2MDE2NzM0fQ.t0PaVOz4OO1lY6Pj5cGDOQzL_vArxMbeT6EgHL0pDiE',
        };

        // 서버에 채팅방 요청 보내기
        axios.post(`https://boomarble.com/chatroom`, { "anotherUserId": anotherUserId }, {
            headers: {
              'X-AUTH-TOKEN': 'your-auth-token-here',
            },
        }).then((response) => {
            if (response.status === 200) {
                // 서버 응답을 받았을 때 웹소켓 연결
                connect();
            }
        })

        return () => {
            disconnect();
        };
    }, [anotherUserId, connect, disconnect]);
}

export default useChatRoom;