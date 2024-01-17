import styled from "styled-components";
import filterBtn from "../../assets/images/filterBtn.png"

export const CommunityBody = styled.div`
    #searchInput{
        width: 350px;
        height: 25px;
        font-size: 100%;
        border:none;
        text-align: left;
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 10px;
        border-radius: 5px;
        margin-left: 5px;
        margin-bottom: 0;
        background-color: #eeeeee;
    }
    #filterBtn{
        position: relative;
        display: flex;
        justify-content: right;
        height: 40px;
        width: 40px;
        background-repeat: no-repeat;
        background-size: 65%;
        background-position: right;
        background-image: url(${filterBtn});
        margin-top: 0;
        margin-bottom: 0;
    }
    #sorting{
        margin-top: 15px;
        position: relative;
        display: flex;
        justify-content: right;
        p:nth-child(1){
            background-color: #dcdcdc;
            padding: 5px;
            border-radius: 5px;
            margin: 0;
        }
        p:nth-child(3){

        }        
    }
    #sortingList{
        position: absolute;
        background-color: white;
        border-radius: 5px;
        transform: translate(0%, 60%);
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 10px;
        padding-right: 10px;
        border: 2px solid #dcdcdc;

        p{
            margin: 0;
        }

        p:nth-child(1){
            background-color: white;
        }
        p:nth-child(2){
            padding-left: 4px;
        }
    }
    
    #postBox{
        margin: 0 auto;
        height: 530px;
        margin-left: 15px;
        margin-right: 15px;
        margin-top: 10px;
        overflow: scroll;
        div{
            padding-top: 5px;
            padding-bottom: 15px;
            padding-left: 10px;
            padding-right: 10px;
            background-color: #eeeeee;
            border-radius: 10px;
            margin-top: 15px;

            p:nth-child(1){
                font-size: 150%;
                font-weight: bold;
                margin: 0;
                padding-top: 15px;
                padding-bottom: 0;
                padding-left: 15px;
                padding-right: 15px;
            }
            div:nth-child(2){
                display: flex;
                margin-left: 3px;
                margin-right: 3px;
                margin-top: 15px;
                margin-bottom: 15px;
                padding: 0;
                padding-left: 15px;
                width: calc((100% - 10px));
                flex-wrap: wrap;
            }
            div:nth-child(2) p{
                font-weight: normal;
                font-size: 100%;
                padding: 0;
                margin-top: 0;
                margin-bottom: 3px;
                margin-right: 15px;
                white-space: nowrap;
            }
        }
    }
`