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
        const response = await axios.get(`https://boomarble.com/reviews/${universityId}/etc`,
        {headers: {'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNTQxMTkzNCwiZXhwIjoxNzA2MDE2NzM0fQ.t0PaVOz4OO1lY6Pj5cGDOQzL_vArxMbeT6EgHL0pDiE',
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
              <h1>기타 사항</h1>
              <DetailContainer>
              {detailInfo.reviewEtcDTOList?.map((review, index) => (
             <DetailBox key={index}>
             <h2>{review.writer.nickname}</h2>
             <p>{review.etc}</p>
             </DetailBox>
        ))}
      </DetailContainer>
        </Container>
    )
}

export default Body; 