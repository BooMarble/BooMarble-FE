import { useNavigate } from "react-router-dom";
import { getChatInfo } from "../../apis/chatListApi/apis";
import { useEffect, useState } from "react";

function Body() {
    const navigate = useNavigate();

    // // chatInfo 가져오기
    // const [roomName, setRoomName] = useState('');
    // const [roomId, setRoomId] = useState('');
    // const [lastMsg, setLastMsg] = useState('');
    // const [dayBefore, setDayBefore] = useState('');
    // const [unReadCount, setUnReadCount] = useState('');

    const [chatLists, setChatLists] = useState([]);

    const loadChatInfo = async() => {
        const chatInfo = await getChatInfo();
        setChatLists(chatInfo)
    }

    useEffect(() => {
        loadChatInfo();
    },[])

    return(
        <div>
            {chatLists.map((chatPost, index) => (
                <div id={`${chatPost.chatRoomId}`} key={index}>
                    <p>{chatPost.roomName}</p>
                    <p>{chatPost.lastMessage}</p>
                    <p>{chatPost.createAt}</p>
                    <p>{chatPost.dayBefore}</p>
                    <p>{chatPost.unreadCount}</p>
                </div>
            )) }
        </div>

    )
}

export default Body;