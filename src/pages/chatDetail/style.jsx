import styled from "styled-components";

export const ChatDetailBody = styled.div`
    #chattingContainer{
        height: 620px;
        overflow: scroll;
    }
    #msgContainer{
        display: flex;
    }
    #msgField{
        background-color: #eeeeee;
        padding: 10px;
        margin: 0;
        border-radius: 20px;
        display: block;
        height: 30px;
        font-size: 140%;
        font-weight: 500%;
        margin-bottom: 15px;
    }
    #msgTime{
        display: block;
        font-size: 100%;
        margin-left: 10px;
    }
    #msgBox{
        left: 50%;
        top: 50%;
        transform: translate(-50%, 500%);
        width: 95%;
        height: 40px;
        background-color: #eeeeee;
        border-radius: 10px;
        display: flex;
        overflow: scroll;
        padding: 10px;
        position: fixed;  
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
