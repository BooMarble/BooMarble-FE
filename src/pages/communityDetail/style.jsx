import styled from "styled-components";
import mypageImg from "../../assets/images/mypage_img.png";
import replyImg from "../../assets/images/chat_img.png";

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
            font-weight: bold;
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
        width: 330px;
        height: 35px;
        justify-content: flex-start;
        p:nth-child(1){
            display: block;
            font-size: 130%;
            text-align: left;
            height: 40px;
            margin: 0;
            font-weight: bold;
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
    #contentBox{
        margin-top: 5px;
        margin-bottom: 15px;
        margin-left: 3px;
    }
    #hashTagBox{
        display: flex;
        width: 380px;
        flex-wrap: wrap; 
        p{
            display: block;
            margin-top: 5px;
            margin-bottom: 0;
            margin-left: 3px;
            margin-right: 3px;
            padding-left: 7px;
            padding-right: 7px;
            padding-top: 3px;
            padding-bottom: 3px;
            color: #666666;
            border-radius: 10px;
            background-color: #eeeeee;
            border: 1.5px solid #a5a4a4;
        }
    }
    #commentBox{
        div:nth-child(1){

            p:nth-child(1){

            }
            p:nth-child(2){

            }
        }

    }
    #commentUserBox{
        display: flex;
        height: 30px;
        p:nth-child(1){
            width: 25px;
            height: 25px;
            background-image: url(${mypageImg});
            background-repeat: no-repeat;
            background-size: 80%;
            background-position: center;
            display: block;
            margin-top: 0;
            margin-bottom: 0;
        }
        p:nth-child(2){
            display: block;
            margin-left: 5px;
            font-size: 120%;
            margin-top: 0;
            margin-bottom: 0;
            font-weight: bold;
        }
        p:nth-child(3){
            display: block;
        }
    }
    #reply{
        width: 25px;
        height: 25px;
        background-image: url(${replyImg});
        background-repeat: no-repeat;
        background-size: 80%;
        background-position: center;
        display: block;
        margin-top: 3px;
        margin-bottom: 0;
        margin-left: 200px;
        margin-right: 20px;
        background-color: #919191;
        border-radius: 5px;
    }
    #commentContents{
        margin-top: 5px;
        margin-bottom: 0;
    }
    #ifNoComments-postingCmts{
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
    #ifComments-postingCmts{
        width: 95%;
        height: 40px;
        background-color: #eeeeee;
        border-radius: 10px;
        display: flex;
        overflow: scroll;
        padding: 10px;
        transform: translateY(360px);

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