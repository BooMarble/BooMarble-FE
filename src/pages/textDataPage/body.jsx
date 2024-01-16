import { Container,DetailContainer,DetailBox} from './style';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Body() {
  let {universityId} = useParams(); // URL에서 id 가져오기
  console.log({universityId});
  const [detailInfo, setDetailInfo] = useState({}); // 세부 정보를 저장할 상태
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태를 저장할 상태
  
  useEffect(() => {
    // id에 해당하는 세부 정보를 가져오는 함수
    const fetchDetailInfo = async () => {
      try {
        const response = await axios.get(`https://boomarble.com/reviews/${universityId}/univInfo`,
        {headers: {'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNDgxMTI5NywiZXhwIjoxNzA1NDE2MDk3fQ.cuY3iR5xtDlQ4XmLvxG_J0v1zBSRjDgQ5T7lk8Oim7o',
          }}) ;
          console.log(response.data|| response.data[0]);
          setDetailInfo(response.data || {}); 
          setIsLoading(false); // 데이터 로딩이 완료되었음을 설정
        } catch (error) {
          console.error('Error fetching detail information:', error);
          setIsLoading(false); // 데이터 로딩이 실패했음을 설정
        }
      };

    fetchDetailInfo(); // fetchDetailInfo 함수 호출
  }, [universityId]); // id가 변경될 때마다 실행
  if (isLoading) {
    return <div>Loading...</div>;
  }
    return(
        <Container>
              <h1>출국 전 준비사항</h1>
              <DetailContainer>
              {detailInfo.revieEtcDTOList.map((review, index) => (
             <DetailBox key={index}>
             <h2>{review.writer.nickname}</h2>
             <h3>입학서가서 작성 시 유의사항</h3>
             <p>{review.admission}</p>
             <h3>비자 취득, 항공권 및 유학생 보험</h3>
             <p>{review.fee}</p>
             <h3>기타 유의사항</h3>
             <p>{review.preparationEtc}</p>
             </DetailBox>
        ))}
      </DetailContainer>
        </Container>
    )
}

export default Body; 