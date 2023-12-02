import { useState } from "react";
import {StyledCalendar, SearchInput}from './style';
import styled from 'styled-components'
//import "react-calendar/dist/Calendar.css";
function Body() {
    const [date, setDate] = useState(new Date());
    const [searchText, setSearchText] = useState(''); // 검색어 상태 추가
  
    const onChange = (newDate) => {
      setDate(newDate);
    };

    const tileContent = ({ date, view }) => {
      if (view === 'month') {
        const startDate = new Date(2023, 11, 17); // 2023년 12월 17일
        const endDate = new Date(2023, 11, 22); // 2023년 12월 22일
        if (date >= startDate && date <= endDate) {
          return <PinkHighlight />; // 분홍색으로 표시할 스타일링된 컴포넌트
        }
      }
      return null;
    };
    const PinkHighlight = styled.div`
    width: 100%;
    height: 100%;
    background-color: pink;
    border-radius: 50%;
  `;


    const handleSearchChange = (e) => {
      setSearchText(e.target.value);
      // 여기서 검색어 상태를 업데이트할 수 있도록 로직을 추가하세요.
      // 예를 들어, 검색 버튼을 누르거나 엔터 키를 누를 때 검색을 실행할 수 있습니다.
    };
  
    // 실제 검색 버튼을 눌렀을 때 또는 엔터 키를 눌렀을 때 실행될 함수를 작성하세요.
    const performSearch = () => {
      // 검색을 실행하는 코드를 작성하세요.
      // setSearchResults 또는 다른 상태를 업데이트하여 검색 결과를 처리합니다.
    };

    return (
      <div>
        <SearchInput
          type="text"
          placeholder="검색어를 입력하세요"
          value={searchText}
          onChange={handleSearchChange}
          // 검색 버튼 클릭 또는 엔터 키 눌렀을 때 performSearch 함수 호출
          // onClick={performSearch} 또는 onKeyDown={(e) => { if (e.key === 'Enter') performSearch(); }}
        />
        {/* 여기에 검색 결과를 표시할 UI를 추가하세요. */}
        <div>
          <h2>달력</h2>
          <StyledCalendar
            onChange={onChange}
            value={date}
            locale="en-US"
            tileContent={tileContent}
          //showNeighboringMonth={false} // 이전, 이후 달의 날짜는 보이지 않도록 설정
          />
        </div>
      </div>
    );
  }
  
  export default Body;