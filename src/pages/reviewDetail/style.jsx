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
    #uniqueInfo3{
        display: flex;
        justify-content: center;
    }

    #uniqueInfo3 > p{
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

    #uniqueInfo3 > p:nth-child(4){
            margin-right:0px;
    }
`