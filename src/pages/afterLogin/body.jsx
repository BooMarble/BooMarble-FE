import axios from 'axios';
import { useState } from 'react';
const Body = () => {
    const [nickname, setNickname] = useState('');
    // 닉네임 변경을 서버에 전송하는 함수
  const updateNickname = () => {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNTQxMTkzNCwiZXhwIjoxNzA2MDE2NzM0fQ.t0PaVOz4OO1lY6Pj5cGDOQzL_vArxMbeT6EgHL0pDiE';

    // API 호출 - 닉네임 변경
    fetch('https://boomarble.com/user/insertInfo', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-AUTH-TOKEN': token,
      },
      body: JSON.stringify({ nickname }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(`게시글이 정상적으로 수정되었습니다. id: ${data.postId}`);
        alert('닉네임 수정 완료')
      })
      .catch(error => console.error('Error updating nickname:', error));
  };

    return(
        <div>
        <h2>닉네임 설정</h2>
        <input
          type="text"
          placeholder="새로운 닉네임 입력"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <button onClick={updateNickname}>닉네임 설정</button>
      </div>
    )
}
export default Body;