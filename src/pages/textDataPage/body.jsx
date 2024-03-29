import { Container,DetailContainer,DetailBox} from './style';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import chat_img from '../../assets/images/chat_img.png';
import useSocket from "../../hooks/useSocket";
import { StompJs, Client } from '@stomp/stompjs';
import { useRef } from 'react';

function Body() {
    const navigate = useNavigate();
    let {universityId} = useParams(); // URL에서 id 가져오기
    console.log({universityId});
    const [detailInfo, setDetailInfo] = useState({}); // 세부 정보를 저장할 상태
    const [isLoading, setIsLoading] = useState(true); // 로딩 상태를 저장할 상태
    
    useEffect(() => {
      // id에 해당하는 세부 정보를 가져오는 함수
      const fetchDetailInfo = async () => {
        try {
          const response = await axios.get(`https://boomarble.com/reviews/${universityId}/preparation`,
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

    // chat 클릭했을 때
    const handleChatClick = async(e) => {
      const order = e.target.id;
      if (order.slice(0,4) === 'chat') {
        const anotherUserId = order.slice(5)
        console.log(anotherUserId)
        // 채팅방 생성하는 함수
        await createChatRoom(anotherUserId);
      }
    }

    const createChatRoom = async(anotherUserId) => {
      await axios.post(`https://boomarble.com/chatroom`, { "anotherUserId": anotherUserId }, {headers: {'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNTQxMTkzNCwiZXhwIjoxNzA2MDE2NzM0fQ.t0PaVOz4OO1lY6Pj5cGDOQzL_vArxMbeT6EgHL0pDiE'}}).then((response) => {
        console.log(response.status)
        console.log(response.data)
        const { roomId } = response.data;
        console.log(roomId);
        if (response.status === 200) {
          navigate(`/chatDetail`, { state: { roomId } });
        }
      })
    }
    return(
        <Container>
              <h1>출국 전 준비사항</h1>
              <DetailContainer>
              {detailInfo.reviewPrepDTOList.map((review, index) => (
             <DetailBox key={index}>
             <h2>{review.writer.nickname}</h2>
             <img id={`chat-${review.writer.id}`} src={chat_img} onClick={handleChatClick}></img>
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