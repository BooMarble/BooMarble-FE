import React from 'react';
import { Container, MainContainer, DetailContainer, TotalMessage } from './style';
function Body() {
    return(
        <Container>
              <h1>기타 참고사항</h1>
              <MainContainer>
                <DetailContainer>
                  <h2>UserName</h2>
                  <TotalMessage>
                    <h3>나라가 좀 더워용 손선풍기 필수</h3>
                  </TotalMessage>
                </DetailContainer>
              </MainContainer>
        </Container>
    )
}

export default Body;