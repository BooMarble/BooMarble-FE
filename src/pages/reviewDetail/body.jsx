import { ReviewDetailBody } from "./style";
import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import notScrapBtn from "../../assets/images/notScrapBtn.png";
import scrapBtn from "../../assets/images/scrapBtn.png";
import { useNavigate } from "react-router-dom";

function Body() {
    const navigate = useNavigate();
    let {universityId} = useParams(); // URL에서 id 가져오기
  console.log({universityId});
  const [detailInfo, setDetailInfo] = useState({}); // 세부 정보를 저장할 상태

  useEffect(() => {
    // id에 해당하는 세부 정보를 가져오는 함수
    const fetchDetailInfo = async () => {
      try {
        const response = await axios.get(`https://boomarble.com/reviews/${universityId}`,
        {headers: {  'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNDgxMTI5NywiZXhwIjoxNzA1NDE2MDk3fQ.cuY3iR5xtDlQ4XmLvxG_J0v1zBSRjDgQ5T7lk8Oim7o',
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

    // 카드 클릭 시
    const handleOnClick = (e) => {
      const order = e.target.id;
      console.log(order);
      // 기숙사 클릭 시
      if (order == 'dorm') {
        navigate(`/reviews/:universityId/dorm`)
      } 
    }
    return(
        <ReviewDetailBody>
            <div id="generalInfo">
                <p>교환유형: {detailInfo.universityType}</p>
                <p>국가: {detailInfo.universityCountry}</p>
                <p>대학: {detailInfo.universityName}</p>
            </div>
            <div id="uniqueInfo1">
                <p><br />출국 전 준비사항</p>
                <p><br />파견 대학 관련</p>
                <p><br />수강<br />교과목<br />리스트</p>
                <Link to="/reviews/${info.universityId}/dorm">연습삼아</Link>
            </div>
            <div id="uniqueInfo2" onClick={handleOnClick}>
                <p><br />교내<br />활동</p>
                <p id="dorm"><br />기숙사</p>
                <p><br />소요<br />비용</p>
            </div>
            <div id="uniqueInfo3">
                <p><br />학점 인정 관련</p>
                <p><br />후배들<br />한 마디</p>
                <p><br />기타</p>
            </div>
        </ReviewDetailBody>
    )
}

export default Body;