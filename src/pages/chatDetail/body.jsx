import { useEffect, useState } from "react";
import { Client } from '@stomp/stompjs';
import { useParams, useLocation } from "react-router-dom";
import { ChatDetailBody } from "./style";
import { getChatLogsInfo } from "../../apis/chatRoomApi/apis";

function Body() {
    const location = useLocation();
    const { roomId } = location.state || {};
    console.log(roomId)

    const [chatList, setChatList] = useState([]);
    const loadChatLogsInfo = async(roomId) => {
        const chatLogs = await getChatLogsInfo(roomId);
        setChatList(chatLogs)
    }
    useEffect(() => {
        loadChatLogsInfo(roomId);
    },[])

    // useEffect(() => {
    //     const loadChatLogsInfo = async (roomId) => {
    //         const chatLogs = await getChatLogsInfo(roomId);
    //         setChatList(chatLogs);
    //     }
    //     loadChatLogsInfo(roomId);
    // }, [roomId]);
    // 클라이언트 객체 만들고
    const client = new Client({
        brokerURL: 'wss://boomarble.com/ws',
        connectHeader: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNTQxMTkzNCwiZXhwIjoxNzA2MDE2NzM0fQ.t0PaVOz4OO1lY6Pj5cGDOQzL_vArxMbeT6EgHL0pDiE",
        debug: function (str) {
            console.log(str);
        },
        reconnectDelay: 5000, //자동 재 연결
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
    });

    client.onConnect = (frame) => {
        console.log('Connected:', frame);
        // 클라이언트 연결 성공 시 구독 = 메시지 수신 가능
        client.subscribe(`/topic/chat/room`, callback)
    };

    client.onStompError = (frame) => {
    console.error('Broker reported error:', frame.headers['message']);
    // 클라이언트 연결 실패 시 실행할 로직 추가
    };

    client.activate();

    const [chat, setChat] = useState('');

    const callback = (message) => {
        if (message.body) {
          let msg = JSON.parse(message.body);
          setChatList((chats) => [...chats, msg]);
        }
    }
    
    const sendChat = async (client, authToken, roomId) => {
        await client.publish({
            destination: "/app/chat/message",
            body: JSON.stringify({
            type: "TALK",
            roomId: roomId,
            message: chat,
            isFile: false
            }),
            headers: {
            'X-AUTH-TOKEN': `${authToken}`
            }
        })
        setChat('')
    }

    const onChangeChat = (e) => {
        setChat(e.target.value);
    }

    const authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNTQxMTkzNCwiZXhwIjoxNzA2MDE2NzM0fQ.t0PaVOz4OO1lY6Pj5cGDOQzL_vArxMbeT6EgHL0pDiE';
    
    const handleOnSubmit = (e) => {
        e.preventDefault();

    }
    return(
        <ChatDetailBody>
            {chatList.map((chatMsg, index) => (
                <div id={`${chatMsg.userId}`} key={index}>
                    <p>{chatMsg.nickname}</p>
                    <p>{chatMsg.message}</p>
                    <p>{chatMsg.createdAt.slice(11)}</p>
                </div>
            ))}
            <form id="msgBox" onSubmit={handleOnSubmit}>
                <input 
                    type="text"
                    id="msg"
                    value={chat}
                    placeholder="메시지 보내기"
                    onChange={onChangeChat}
                    onKeyDown={(ev) => {
                        if (ev.key == 'Enter') {
                            console.log("Sending chat with roomId:", roomId);
                            sendChat(client, authToken, roomId);
                        }
                    }} 
                />
                <button onClick={() => sendChat(client, authToken, roomId)}>등록</button>
            </form>
        </ChatDetailBody>

    )
}

export default Body;