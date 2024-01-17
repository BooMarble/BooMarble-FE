import { useNavigate } from "react-router-dom";
import useChatRoom from "../../apis/chatRoomApi/apis";

function Body() {
    const navigate = useNavigate();
    // 임의로 지정한 상대방 id <-- 나중에 다른 페이지에서는 변경 필요
    const anotherUserId = 3;

    const createChatRoom = useChatRoom(anotherUserId);

    const handleChatClick = async (e) => {
        const order = e.target.id;
        if (order === 'chat') {
            // 최초 접속이라면 -> 채팅방 생성하고 채팅 상세 페이지로 넘어가서 채팅방 입장
            createChatRoom(anotherUserId)
            // 최초 접속이 아니라면 -> 채팅 상세 페이지로 넘어가서 채팅방 입장
        }
    }
    return(
        <p id="chat" onClick={handleChatClick}>부마블</p>
    )
}

export default Body;