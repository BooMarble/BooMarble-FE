import styled from "styled-components";

export const CommunityBody = styled.div`

    #reviewBox{
        width: 80%;
        margin: 0 auto;
        height: 500px;
        border-radius: 5px;
        box-sizing: border-box;
        overflow: scroll;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 150%;
        padding-top: 10px;
        div{
            margin: 0 auto;
            box-sizing: border-box;
            border-radius: 5px;
            margin-top: 10px;
            width: 90%;
            margin-bottom: 10px;
            p{  
                    margin: 0;
                    line-height: 50px;
                    height: 100%;
                    text-align: center;
                    font-size: 120%;
                    font-weight: 700;
                    background-position: center;
                    background-size: cover;
                    border-radius: 50%;
                    background-repeat: no-repeat;
            }
        }
    }`