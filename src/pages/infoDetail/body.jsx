import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // React Router의 useParams를 사용하여 URL의 파라미터를 가져옴
import axios from 'axios';

function Body() {
  let {universityId} = useParams(); // URL에서 id 가져오기
  console.log({universityId});
  const [detailInfo, setDetailInfo] = useState({}); // 세부 정보를 저장할 상태

  useEffect(() => {
    // id에 해당하는 세부 정보를 가져오는 함수
    const fetchDetailInfo = async () => {
      try {
        const response = await axios.get(`https://boomarble.com/info/${universityId}`,
        {headers: {  'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNDE3Nzc2MiwiZXhwIjoxNzA0NzgyNTYyfQ.VFK3IZu7g_kVQg6bYibjFBGMHwKZJ5lQdmRMcz94lLI',
          }}) ;
          console.log(response.data|| response.data[0]);
        setDetailInfo(response.data|| response.data[0]); // 받아온 세부 정보를 상태에 설정
      } catch (error) {
        console.error('Error fetching detail information:', error);
      }
    };

    fetchDetailInfo(); // fetchDetailInfo 함수 호출
  }, [universityId]); // id가 변경될 때마다 실행
  if (!detailInfo) {
    return <div>Loading...</div>;
  }
  return (
    <div className="detail-page">
      <h2>University Details</h2>
      <p>University Name: {detailInfo.universityName}</p>
      <p>ExType: {detailInfo.exType}</p>
      <p>Country: {detailInfo.country}</p>
    </div>
  );
}

export default Body;
