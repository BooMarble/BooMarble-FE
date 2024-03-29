import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom'; // React Router의 useParams를 사용하여 URL의 파라미터를 가져옴
import axios from 'axios';
import {liking, notLiking } from "../../apis/infoApi/apis";
import likeBtn from"../../assets/images/likeBtn.png"
import nonlikeBtn from"../../assets/images/nonlikeBtn.png"
import {Container, DetailWrapper, MainDetailsWrapper, RequirementWrapper, EnglishContainer, JapaneseContainer, ChineseContainer, CostWrapper, ExtradetailWrapper} from './style';
import chat_img from '../../assets/images/chat_img.png'
function Body() {
  let {universityId} = useParams(); // URL에서 id 가져오기
  console.log({universityId});
  const [detailInfo, setDetailInfo] = useState({}); // 세부 정보를 저장할 상태
  const [isLikeOpen, setLikeOpen] = useState(false)
  useEffect(() => {
    // id에 해당하는 세부 정보를 가져오는 함수
    const fetchDetailInfo = async () => {
      try {
        const response = await axios.get(`https://boomarble.com/info/${universityId}`,
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
  //좋아요

  // 좋아요 상태를 관리하는 state
  function openLike(){
      setLikeOpen(true)
      liking(universityId)
  }

  // 좋아요 취소하는 함수
  function closeLike(){
      setLikeOpen(false)
      notLiking(universityId)
  }

  return ( 
    <Container>
    <h2> {detailInfo.universityName}</h2>
    <DetailWrapper>
    <MainDetailsWrapper>
    <p id="like" onClick={isLikeOpen ? closeLike : openLike} 
                        style={{ backgroundImage: isLikeOpen ? `url(${likeBtn})` : `url(${nonlikeBtn})` }}></p>
    <img id="chat" src={chat_img}></img>
    <h2>Basic Info</h2>
    <h3>유형</h3> 
    <p>{detailInfo.exType}</p>
    <h3>국가</h3>
    <p> {detailInfo.country}</p>
    <h3>기간</h3>
    <p> {detailInfo.period}</p>
    <h3>모집 인원</h3>
    <p>{detailInfo.recruitNum}</p>
    </MainDetailsWrapper>

    <RequirementWrapper>
    <h2>Requirement</h2>
    <h3>학점 기준</h3>

    <EnglishContainer>
    <p>{detailInfo.gradeQ}</p>
    <h3>IBT 점수</h3>
    <p>{detailInfo.ibtQ}</p>
    <h3>TOEFL 점수</h3>
    <p>{detailInfo.toeflQ}</p>
    <h3>IELTS 점수</h3>
    <p>{detailInfo.ielts}</p>
    </EnglishContainer>
    <JapaneseContainer>
    <h3>일본어 요건</h3>
    {detailInfo.japaneseQ && detailInfo.japaneseQ !== "" && (
      <p>{detailInfo.japaneseQ}</p>)}
    </JapaneseContainer>
    <ChineseContainer>
    <h3>중국어 요건</h3>
     {detailInfo.chineseQ && detailInfo.chineseQ.length > 0 && detailInfo.chineseQ[0].id !== "" && (
      <div>
        <ul>
          {detailInfo.chineseQ.map((chinese, index) => (
            <li key={index}>
              ID: {chinese.id}, 종류: {chinese.chineseType}, 레벨: {chinese.level}, 점수: {chinese.score}
            </li>
          ))}
        </ul>
      </div>
    )}
    </ChineseContainer>

    <h3>기타 자격</h3>
    <p>{detailInfo.qualificationEtc}</p>
    </RequirementWrapper>

    <CostWrapper>
    <h2>Cost</h2>
    <h3>예상 비용</h3>
    <p>{detailInfo.expCost}</p>
    <h3>예상 비용 설명</h3>
    <p>{detailInfo.expCostDesc}</p>
    </CostWrapper>

    <ExtradetailWrapper>
    <h2>Extradetail</h2>
    <h3>혜택</h3>
    <p>{detailInfo.benefit}</p>
    <h3>기타</h3>
    <p>{detailInfo.etc}</p>
    
  </ExtradetailWrapper>

  </DetailWrapper>
  </Container>
  );
}

export default Body;