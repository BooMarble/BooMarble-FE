import { Link } from 'react-router-dom';
import { StyledBody, Image, StyledLink } from './style'; // style.jsx 파일에서 가져오기
//import { GoogleLogin } from 'react-google-login'; //다운받을지 말지...
//npm install --save gapi-script//
//import useScript from 'gapi-script'
import boo_circle_1 from '../../assets/images/boo_circle_1.png';
import { useEffect } from 'react';
import axios from "axios";
import { useLocation } from 'react-router-dom';

function Body() {

    // // 현재 페이지의 url을 추출
    // const location = useLocation();
    // console.log(location)
    // axios.get(`https://boomarble.com/login/oauth2/code/google`).then((response) => {
    //   console.log(response.data)
    // })

  return (
    <StyledBody>
      <Image src={boo_circle_1} alt="boo_circle" />
      <StyledLink as={Link} to="https://accounts.google.com/o/oauth2/auth?client_id=792908248831-o01redqdqoehht1v5ht5151ik4kog7a4.apps.googleusercontent.com&redirect_uri=https://boomarble.com/login/oauth2/code/google&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile">google로 시작하기</StyledLink>
    </StyledBody>
  );
}

export default Body;