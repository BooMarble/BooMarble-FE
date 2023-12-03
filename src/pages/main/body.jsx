import { useState } from "react";
import { StyledCalendar, SearchInput } from './style';
import styled from 'styled-components';

function Body() {
  const [date, setDate] = useState(new Date());
  const [searchText, setSearchText] = useState(''); // 검색어 상태 추가

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
    cursor: pointer;
  `;

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  // ... (performSearch 함수 등 추가)

  return (
    <div>
      <SearchInput
        type="text"
        placeholder="검색어를 입력하세요"
        value={searchText}
        onChange={handleSearchChange}
      />
      {/* 검색 결과를 표시할 UI 추가 */}
      <div>
        <h2>달력</h2>
        <StyledCalendar
          onChange={onChange}
          value={date}
          locale="en-US"
          tileContent={tileContent}
        />
      </div>
    </div>
  );
}

export default Body;