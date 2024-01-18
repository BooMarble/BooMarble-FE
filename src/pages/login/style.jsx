import styled from "styled-components";
import { Link } from "react-router-dom";
// 이미지 스타일
const Image = styled.img`
  width: 200px;
  height: auto;
`;

// 링크 스타일
const StyledLink = styled(Link)`
text-decoration: none;
color: #333;
background-color: #fff;
font-size: 18px;
padding: 10px 20px;
border: 2px solid #333;
border-radius: 5px;
transition: all 0.3s ease;

&:hover {
  background-color: #333;
  color: #fff;
}
`;

// Body 컴포넌트 스타일
const StyledBody = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #a0a0a0;
justify-content: center;
height: 100vh;

gap: 20px; /* 이미지와 버튼 사이의 간격 설정 */
`;

export { StyledBody, Image, StyledLink };