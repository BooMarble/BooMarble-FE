import React, { useEffect, useState } from 'react';
import { getInfo } from '../../apis/infoApi/apis'; // getInfo 함수를 가져오는 경로를 정확하게 지정해주세요.

const Body = () => {
  const [universityInfo, setUniversityInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const info = await getInfo(); // getInfo 함수를 사용하여 정보를 받아옴
        setUniversityInfo(info); // 받아온 정보를 상태에 설정
      } catch (error) {
        console.error('Error fetching university information:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="university-info">
      <h2>School Information</h2>
      <ul>
        {/* 받아온 학교 정보를 간단한 목록으로 표시 */}
        {universityInfo.map((info, index) => (
          <li key={index}>
            <p>Name: {info.universityName}</p>
            <p>Country: {info.universityCountry}</p>
            <p>Type: {info.universityType}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Body;