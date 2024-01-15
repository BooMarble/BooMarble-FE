import React from 'react';
import { Container, MainContainer, DetailContainer, TotalGrade } from './style';
function Body() {
    return(
        <Container>
              <h1>학점 인정 관련 정보</h1>
              <MainContainer>
                <DetailContainer>
                  <h2>UserName</h2>
                  <TotalGrade>
                    <h3>총 17학점</h3>
                  </TotalGrade>
                </DetailContainer>
              </MainContainer>
        </Container>
    )
}

export default Body;