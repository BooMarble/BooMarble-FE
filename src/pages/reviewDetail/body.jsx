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
        {headers: {  'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNTQxMTkzNCwiZXhwIjoxNzA2MDE2NzM0fQ.t0PaVOz4OO1lY6Pj5cGDOQzL_vArxMbeT6EgHL0pDiE',
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
      if (order == 'dorm') {
        navigate(`/reviews/${universityId}/dorm`)
      }
      else if (order == 'accGrade') {
        navigate(`/reviews/${universityId}/accGrade`)
      }
      else if (order=='activity'){
        navigate(`/reviews/${universityId}/activity`)
      }
      else if (order=='cost'){
        navigate(`/reviews/${universityId}/cost`)
      }
      else if (order=='courseList'){
        navigate(`/reviews/${universityId}/courseList`)
      }
      else if (order=='etc'){
        navigate(`/reviews/${universityId}/etc`)
      }
      else if (order=='message'){
        navigate(`/reviews/${universityId}/message`)
      }
      else if (order=='textDataPage'){
        navigate(`/reviews/${universityId}/textDataPage`)
      }
      else if (order=='univInfo'){
        navigate(`/reviews/${universityId}/univInfo`)
      }
    }
    return(
        <ReviewDetailBody>
            <div id="generalInfo">
                <p>교환유형: {detailInfo.universityType}</p>
                <p>국가: {detailInfo.universityCountry}</p>
                <p>대학: {detailInfo.universityName}</p>
            </div>
            <div id="uniqueInfo1" onClick={handleOnClick}>
                <p id="textDataPage"><br />출국 전 준비사항</p>
                <p id="univInfo"><br />파견 대학 관련</p>
                <p id="courseList"><br />수강<br />교과목<br />리스트</p>
            </div>
            <div id="uniqueInfo2" onClick={handleOnClick}>
                <p id="activity"><br />교내<br />활동</p>
                <p id="dorm"><br />기숙사</p>
                <p id="cost"><br />소요<br />비용</p>
            </div>
            <div id="uniqueInfo3" onClick={handleOnClick}>
                <p id="accGrade"><br />학점 인정 관련</p>
                <p id="message"><br />후배들<br />한 마디</p>
                <p id="etc"><br />기타</p>
            </div>
        </ReviewDetailBody>
    )
}

export default Body;