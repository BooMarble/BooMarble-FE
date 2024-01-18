import axios from "axios";

export const getChatLogsInfo = async(roomId) => {
    let chatLogs = [];
    await axios.get(`https://boomarble.com/chatroom/${roomId}`, {
        headers: {
            'X-AUTH-TOKEN': `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNTQxMTkzNCwiZXhwIjoxNzA2MDE2NzM0fQ.t0PaVOz4OO1lY6Pj5cGDOQzL_vArxMbeT6EgHL0pDiE`,
        }
    }).then((response) => {
        console.log(response.data)
        chatLogs = response.data;
    })
    return chatLogs
}