import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Body() {
    const navigate = useNavigate();
    //인가 코드
    let code = new URL(window.location.href).searchParams.get('code');
    const googleLogin = async (code) => {
        await axios.get(`https://boomarble.com/login/oauth2/code/google?code=${code}`,)
        .then((response) => {
            console.log(response.data); // 넘어온 토큰

            const ACCESS_TOKEN = response.data;
            console.log(ACCESS_TOKEN);

            localStorage.setItem("token", ACCESS_TOKEN); 
            navigate(`/`)
        })
        .catch((err) => {
            console.log("소셜 로그인 에러", err);
            window.alert("잠시 후 다시 시도해주세요");
            navigate(`/login`)
        })
    }
    useEffect(() => {
        if (code) {
            googleLogin(code);
        }
    },[])

}

export default Body;