import { Link } from 'react-router-dom';
import { StyledBody, Image, StyledLink } from './style'; // style.jsx 파일에서 가져오기
//import { GoogleLogin } from 'react-google-login'; //다운받을지 말지...
//npm install --save gapi-script//
//import useScript from 'gapi-script'
import boo_circle_1 from '../../assets/images/boo_circle_1.png';

function Body() {
  return (
    <StyledBody>
      <Image src={boo_circle_1} alt="boo_circle" />
      <StyledLink as={Link} to="../">google로 시작하기</StyledLink>
    </StyledBody>
  );
}

export default Body;