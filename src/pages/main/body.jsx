import { useState } from "react";
import {StyledCalendar}from './style';
//import "react-calendar/dist/Calendar.css";
function Body() {
    const [date, setDate] = useState(new Date());
  
    const onChange = (newDate) => {
      setDate(newDate);
    };
    return (
      <div>
        <p>메인페이지</p>
        <div>
          <h2>달력</h2>
          <StyledCalendar
            onChange={onChange}
            value={date}
            locale="en-US"
          //showNeighboringMonth={false} // 이전, 이후 달의 날짜는 보이지 않도록 설정
          />
        </div>
      </div>
    );
  }
  
  export default Body;