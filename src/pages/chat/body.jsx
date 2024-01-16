import { useState } from "react";
import axios from "axios";
import SockJS from "sockjs-client";
import StompJs from "stompjs";

function Body() {
    // 로컬 스토리지에 저장된 거 긁어오는 방식으로 바꾸기
    const connectHeaders = {
        "X-AUTH-TOKEN": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwMzU3MjczOSwiZXhwIjoxNzA0MTc3NTM5fQ.XdcltGt2MDyTnv1kfZghwdYeEZUNyiBEzGB4qUmMma8"
    };

    // 로컬 스토리지에 저장된 거 긁어오는 방식으로 바꾸기
    const sendHeaders = {
        "X-AUTH-TOKEN": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwMzU3MjczOSwiZXhwIjoxNzA0MTc3NTM5fQ.XdcltGt2MDyTnv1kfZghwdYeEZUNyiBEzGB4qUmMma8"
    };

    //
    const sendMessage = {
        "type": "TALK",
        "roomId": 1,
        "message": "Hello, World!",
        "isFile": false
    };

    // 최초 접속 시 채팅방 생성
    // 채팅 이미지 클릭 시 아래 함수 호출
    const createChatRoom = (anotherUserId) => {
        // 채팅할 상대방 id 서버로 보내고
        axios.post(`https://boomarble.com/chatroom`, { "anotherUserId": anotherUserId}).then((response) => {
            console.log(response.data)
            // 성공하면 
            if (response.status === 200) {
                
                // 클라이언트 객체 생성
                const client = new StompJs.Client({
                    brokerURL: 'wss://boomarble.com/ws',
                    connectHeaders,
                    debug: function (str) {
                    console.log(str);
                    },
                    reconnectDelay: 5000, //자동 재 연결
                    heartbeatIncoming: 4000,
                    heartbeatOutgoing: 4000,
                });

                // 웹소켓에 연결하기
                client.connect = function (frame) {
                    // 웹소켓 연결 성공했을 때
                    console.log('Connected:', frame);
                    // 지정된 토픽에 대한 구독 설정

                    // send destination으로 메시지 보내기
                    client.publish({
                        destination: '/app/chat/enter',
                        body: JSON.stringify(sendMessage),
                        headers: sendHeaders,
                    });
                    // 웹소켓 연결 활성화
                    client.activate();
                };
            }
        })
    }


    return(
        <p>부마블</p>
    )
}

export default Body;