import { useState, useEffect } from "react";
import { StyledCalendar,PopularKeywordsList, KeywordItem} from './style';
import styled from 'styled-components';

function Body() {
  //캘린더
  const [date, setDate] = useState(new Date());
  const onChange = (newDate) => {
    setDate(newDate);
  };
  const tileContent = ({ date, view }) => {
    const startDate = new Date(2023, 11, 17); // 2023년 12월 17일
    const endDate = new Date(2023, 11, 22); // 2023년 12월 22일
    const onClickDate = () => {
      if (date >= startDate && date <= endDate) {
        alert('모집기간');
      }
    };
    if (view === 'month') {
      if (date >= startDate && date <= endDate) {
        return <PinkHighlight onClick={onClickDate} />;
      }
    }
    return null;
  };
  const PinkHighlight = styled.div`
    width: 100%;
    height: 20%;
    background-color: pink;
    cursor: pointer;`;
 //인기검색어 조회 
  const [popularKeywords, setPopularKeywords] = useState([]);
  const headers = {
    'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNDE3Nzc2MiwiZXhwIjoxNzA0NzgyNTYyfQ.VFK3IZu7g_kVQg6bYibjFBGMHwKZJ5lQdmRMcz94lLI',
  }
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
      }
    };

    fetchPopularKeywords();
  }, []);

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
    </div>
  );
}

export default Body;