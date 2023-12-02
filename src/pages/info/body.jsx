import React, { useState } from 'react';

function Body() {
  // 데이터
  const universityInfoLists = [
    {
      "universityName": "미국대학교",
      "universityCountry": "미국",
      "universityType": "교환학생"
    },
    {
      "universityName": "하버드대학교",
      "universityCountry": "미국",
      "universityType": "교환학생"
    },
    //... (나머지 데이터)
  ];

  // 선택한 값들을 저장할 상태 변수들
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [selectedUniversityType, setSelectedUniversityType] = useState('');
  const [filteredUniversities, setFilteredUniversities] = useState([]);

  // 국가 선택 시
  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);

    // 해당 국가의 대학 목록 필터링
    const filtered = universityInfoLists.filter(
      (uni) => uni.universityCountry === country
    );
    setFilteredUniversities(filtered);
    setSelectedUniversity('');
    setSelectedUniversityType('');
  };

  // 대학 선택 시
  const handleUniversityChange = (e) => {
    const university = e.target.value;
    setSelectedUniversity(university);
  };

  // 선발 유형 선택 시
  const handleUniversityTypeChange = (e) => {
    const type = e.target.value;
    setSelectedUniversityType(type);
  };

  return (
    <div>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">국가 선택</option>
        {/* 국가 목록을 추가하세요 */}
      </select>
      <select value={selectedUniversity} onChange={handleUniversityChange}>
        <option value="">대학 선택</option>
        {filteredUniversities.map((uni, index) => (
          <option key={index} value={uni.universityName}>{uni.universityName}</option>
        ))}
      </select>
      <select value={selectedUniversityType} onChange={handleUniversityTypeChange}>
        <option value="">선발 유형 선택</option>
        {/* 선발 유형 목록을 추가하세요 */}
      </select>
      <div>
        <h2>대학 목록</h2>
        <ul>
          {filteredUniversities.map((uni, index) => (
            <li key={index}>{uni.universityName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Body;
