import React from 'react';
import { Container, MainContainer, DetailContainer, TotalActivity } from './style';
function Body() {
    return(
        <Container>
              <h1>교내 활동</h1>
              <MainContainer>
                <DetailContainer>
                  <h2>UserName</h2>
                  <TotalActivity>
                    <h3>동아리 재밌음. 그리고 축제가 알참</h3>
                  </TotalActivity>
                </DetailContainer>
              </MainContainer>
        </Container>
    )
}

export default Body;