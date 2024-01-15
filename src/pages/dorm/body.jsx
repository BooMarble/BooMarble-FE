import { Container,DetailContainer,DormName, DormDes} from './style';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Body() {
  let {universityId} = useParams(); // URL에서 id 가져오기
  console.log({universityId});
  const [detailInfo, setDetailInfo] = useState({}); // 세부 정보를 저장할 상태
    return(
        <Container>
              <h1>기숙사 & 숙소</h1>
                <DetailContainer>
                  <h2>UserName</h2>
                  <DormName>
                    <h3>숙소 형태</h3>
                    <p>기숙사</p>
                  </DormName>
                  <DormDes>
                    <h3>숙소 사용</h3>
                    <p>교환학생 전용</p>
                  </DormDes>
                </DetailContainer>
        </Container>
    )
}

export default Body;