import { useState, useEffect } from "react";
import { StyledCalendar,PopularKeywordsList, KeywordItem} from './style';
import styled from 'styled-components';

function Body() {
  //캘린더
  const [date, setDate] = useState(new Date());
  const headers = {
    'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNDE3Nzc2MiwiZXhwIjoxNzA0NzgyNTYyfQ.VFK3IZu7g_kVQg6bYibjFBGMHwKZJ5lQdmRMcz94lLI',}
  const onChange = (newDate) => {
    setDate(newDate);};
  const tileContent = ({ date, view }) => {
    const startDate = new Date(2024, 1, 1); // 2023년 12월 17일
    const endDate = new Date(2024, 1, 22); // 2023년 12월 22일
    const onClickDate = () => {
      if (date >= startDate && date <= endDate) {
        alert('모집기간');}};
    if (view === 'month') {
      if (date >= startDate && date <= endDate) {
        return <PinkHighlight onClick={onClickDate} />;
      }}
    return null;};
  const PinkHighlight = styled.div`
    width: 100%;height: 20%;
    background-color: pink;
    cursor: pointer;`;
 //인기검색어 조회 
  const [popularKeywords, setPopularKeywords] = useState([]);
  
  useEffect(() => {
    const fetchPopularKeywords = async () => {
      try {
        const response = await fetch('https://boomarble.com/hotKeyWord', {
          headers: headers
        });
        if (response.ok) {
          const data = await response.json();
          setPopularKeywords(data);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }};
    fetchPopularKeywords();
  }, []);

//모의지원
const [countries, setCountries] = useState([]);
const [universities, setUniversities] = useState([]);
const [exTypes, setExTypes] = useState([]);
const [selectedCountry, setSelectedCountry] = useState('');
const [selectedUniversity, setSelectedUniversity] = useState('');
const [selectedExType, setSelectedExType] = useState('');


  const handleCountryChange = (event) => {
    const selectedCountryName = event.target.value;
    setSelectedCountry(selectedCountryName);
  }; 
  const handleUniversityChange = (event) => {
    const selectedUniversityId = event.target.value;
    setSelectedUniversity(selectedUniversityId);
  };
  const handleExTypeChange = (event) => {
    const selectedExType = event.target.value;
    setSelectedExType(selectedExType);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://boomarble.com/universities', {
          headers: headers,
        });
        if (response.ok) {
          const data = await response.json();
          setCountries(data.countries);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchCountries();
  }, []);
  const handleSearch = async () => {
    try {
      let languageType = 'english'; // 기본적으로 영어권으로 설정
      // 선택된 국가에 따라 언어권 파악
      const selectedCountryInfo = countries.find(country => country.englishName === selectedCountry);
      if (selectedCountryInfo) {
        const { englishName } = selectedCountryInfo;
        // 중국어권
        if (englishName === 'CHN') {
          languageType = 'chinese';
        } 
        // 일본어권
        else if (englishName === 'JPN') {
          languageType = 'japanese';
        }
      }
      // 국가에 따른 언어권에 맞는 API 호출
      const response = await fetch(`https://boomarble.com/prediction?country=${selectedCountry}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept':'application/json',
          'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNDE3Nzc2MiwiZXhwIjoxNzA0NzgyNTYyfQ.VFK3IZu7g_kVQg6bYibjFBGMHwKZJ5lQdmRMcz94lLI'
        }
      });
  
      if (response.ok) {
        const data = await response.text();
        console.log('API 응답 데이터:', data); // 받은 데이터를 로깅
      } else {
        throw new Error('Failed to fetch language data');
      }
    } catch (error) {
      console.error('Error fetching language data:', error);
    }
  };

  return (
    <div>
      <PopularKeywordsList>
      <h2>인기 검색어</h2>
        {popularKeywords.map((keyword, index) => (
          <KeywordItem key={index}>
            <span>{keyword.rankKeyword}</span>
          </KeywordItem>
        ))}
      </PopularKeywordsList>
      
        <StyledCalendar
          onChange={onChange}
          value={date}
          locale="en-US"
          tileContent={tileContent}
        />
        <div>
        <label htmlFor="countryDropdown">모의지원</label>
        <select id="countryDropdown" onChange={handleCountryChange} value={selectedCountry}>
          <option value="">Country</option>
          {countries.map((country, index) => (
            <option key={index} value={country.englishName}>
              {country.name}
            </option>
          ))}
        </select>
        {/* 대학 선택 드롭다운 */}
        <label htmlFor="universityDropdown">대학 선택</label>
        <select id="universityDropdown" onChange={handleUniversityChange} value={selectedUniversity}>
          <option value="">University</option>
          {universities.map((university, index) => (
            <option key={index} value={university.id}>
              {university.name}
            </option>
          ))}
        </select>

        {/* 교환 타입 선택 드롭다운 */}
        <label htmlFor="exTypeDropdown">교환 타입 선택</label>
        <select id="exTypeDropdown" onChange={handleExTypeChange} value={selectedExType}>
          <option value="">Exchange Type</option>
          <option value="exchange">교환학생</option>
          {/* 다른 교환 타입들을 필요에 따라 추가 */}
        </select>

        <button onClick={handleSearch}>Search</button>
      </div>

    </div>
  );
}

export default Body; 