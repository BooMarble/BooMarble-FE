import styled from "styled-components";

export const ChatDetailBody = styled.div`
    #msgBox{
        width: 95%;
        height: 40px;
        background-color: #eeeeee;
        border-radius: 10px;
        display: flex;
        overflow: scroll;
        padding: 10px;
        transform: translateY(420px);     
    }
    input{
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
`
