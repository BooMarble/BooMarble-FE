import styled from "styled-components";
import toggleBtn from "../../assets/images/toggleBtn.png";

export const ReviewDetailBody = styled.div`
    #generalInfo {
        padding-left: 15px;
        padding-right: 15px;
        p{
            font-weight: bold;
            font-size: 90%;
            margin: 0;
        }
        p:nth-child(1){
            display: inline-block;
            margin-top: 0;
            margin-bottom: 0;
        }
        
        p:nth-child(2){
            width: 30%;
            height: 30px;
            background-repeat: no-repeat;
            background-size: 20%; 
            display: inline-block;
            font-size: 30px;
            margin-top: 0;
            margin-bottom: 0;
            margin-left: 20px;
        }
        p:nth-child(3){
            
        }
        p:nth-child(4){
            
        }
        p:nth-child(5){
            
        }
        p:nth-child(6){
            width: 50%;
            height: 20px;
            background-image: url(${toggleBtn});
            background-repeat: no-repeat;
            background-size: 10%;
            margin: 0;
            margin-top: 10px;

            span{
                padding-left: 20px;
                font-weight: bold;
            }
        }        
    }
    #domInfo{
        background-color: #eeeeee;
        border-radius: 10px;
        padding: 5px;
        margin-top: 10px;
        margin-left: 10px;
        margin-right: 10px;
    }
    #domInfo > p:nth-child(1){
        font-weight: bold;
        font-size: 70%;
        padding-left: 10px;
    }
    #domInfo > p:nth-child(2){
        font-size: 65%;
        font-weight: normal;
        min-width: 300px;
        background-image: none;
        height: 15px;
        margin: 0;
        padding-left: 10px;
    }
    #domInfo > p:nth-child(3){
        font-weight: bold;
        font-size: 70%;
        padding-left: 10px;
        margin-top: 10px;
    }
    #domInfo > p:nth-child(4){
        font-size: 65%;
        font-weight: normal;
        padding-left: 10px;
        margin-bottom: 10px;
        margin-top: 7px;
    }

    #uniqueInfo1{
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }

    #uniqueInfo1 > p{
            background-color: #dcdcdc;
            padding: 10px;
            border-radius: 5px;
            width: 50px;
            height: 70px;
            font-size: 70%;
            margin-right: 20px;
            font-weight: bold;
            text-align: center;
    }

    #uniqueInfo1 > p:nth-child(4){
        margin-right:0px;
    }

    #uniqueInfo2{
        display: flex;
        justify-content: center;
    }

    #uniqueInfo2 > p{
            background-color: #dcdcdc;
            padding: 10px;
            border-radius: 5px;
            width: 50px;
            height: 70px;
            font-size: 70%;
            margin-right: 20px;
            font-weight: bold;
            text-align: center;
    }

    #uniqueInfo2 > p:nth-child(4){
            margin-right:0px;
    }
`