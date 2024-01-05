import styled from "styled-components";
import mypageImg from "../../assets/images/mypage_img.png";

export const DetailBody = styled.div`
    #userBox{
        display: flex;
        height: 35px;
        margin-bottom: 30px;
        p:nth-child(1){
            display: block;
        }
        p:nth-child(2){
            display: block;
        }
    }
    #profile{
        width: 30px;
        height: 30px;
        background-image: url(${mypageImg});
        background-repeat: no-repeat;
        background-size: 80%;
        background-position: center;
    }
    #name{
        font-size: 120%;
        margin-left: 5px;
    }
    #titleBox{
        display: flex;
        width: 300px;
        height: 40px;
        justify-content: flex-start;
        p:nth-child(1){
            display: block;
            font-size: 130%;
            text-align: left;
            height: 40px;
            margin: 0;
        }
        p:nth-child(2){
            display: block;
            margin-left: 10px;
        }
    }
    #scrap{
        display: block;
        width: 40px;
        height: 40px;
        background-repeat: no-repeat;
        background-size: 80%;
        margin: 0;
    }
    #postingCmts{
        width: 95%;
        height: 40px;
        background-color: #eeeeee;
        border-radius: 10px;
        display: flex;
        overflow: scroll;
        padding: 10px;
        transform: translateY(420px);

        textarea{
            width: 80%;
            height: 25px;
            border: none;
            outline: none;
            font-size: 140%;
            background-color: transparent;
            padding: 5px;
            overflow: hidden;
        }
        button{
            border: none;
            background-color: white;
            border-radius: 10px;
            padding-top: 5px !important;
            padding-bottom: 5px !important;
            height: 30px;
        }
    }
`