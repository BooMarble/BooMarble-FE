// Body.jsx
import React, { useState, useEffect } from 'react';
import { StyledBody } from './style';

const Body = () => {
  const [communityLists, setCommunityLists] = useState([]);
  const [myPosts, setMyPosts] = useState([]);
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNTQxMTkzNCwiZXhwIjoxNzA2MDE2NzM0fQ.t0PaVOz4OO1lY6Pj5cGDOQzL_vArxMbeT6EgHL0pDiE';
    fetch('https://boomarble.com/mypage/communities', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-AUTH-TOKEN': token,
      },
    })
      .then(response => response.json())
      .then(data => setCommunityLists(data.communityLists))
      .catch(error => console.error('Error fetching community data:', error));
    fetchPosts(token);
  }, []);
  const fetchPosts = (token) => {
    fetch(`https://boomarble.com/mypage/posts?type=community`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-AUTH-TOKEN': token,
      },
    })
      .then(response => response.json())
      .then(data => setMyPosts(data.communityLists))
      .catch(error => console.error('Error fetching posts data:', error));
  };
  // 닉네임 변경을 서버에 전송하는 함수
  const updateNickname = () => {
    // 토큰 설정
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

  return (
    <StyledBody>
      <div>
        <h2>스크랩한 글 목록</h2>
        {communityLists.map(community => (
          <div key={community.communityId}>
            <h3>{community.communityTitle}</h3>
            <ul>
              {community.communityTagList.map(tag => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div>
        <h2>내가 쓴 글 목록</h2>
        {myPosts.map(post => (
          <div key={post.communityId}>
            <h3>{post.communityTitle}</h3>
            <ul>
              {post.communityTagList.map(tag => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
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
    </StyledBody>
  );
};

export default Body;
