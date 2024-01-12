import React from 'react';
import { Container, MainContainer, DetailContainer, TotalCost, AirFare, Insurance, CostEtc} from './style';

function Body() {
    return(
        <Container>
              <h1>소요 비용</h1>
              <MainContainer>
                <DetailContainer>
                  <h2>UserName</h2>
                  <TotalCost>
                    <h3>총 비용</h3>
                    <p>70만원</p>
                  </TotalCost>
                  <AirFare>
                    <h3>항공료</h3>
                    <p>70만원</p>
                  </AirFare>
                  <Insurance>
                    <h3>유학생 보험</h3>
                    <p>70만원</p>
                  </Insurance>
                  <CostEtc>
                    <h3>기타 비용</h3>
                    <p>70만원</p>
                  </CostEtc>
                </DetailContainer>
              </MainContainer>
        </Container>
    )
}

export default Body;