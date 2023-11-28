import styled from "styled-components";

export const ReviewBody = styled.div`
    max-width: 500px;

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
        background-color: #dcdcdc;
    }

    #dropdownContainer{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        padding-left: 10px;
        padding-right: 10px;

        #country{
            
        }

        #university{
            p:nth-child(1){
                border-radius: 20px;
                background-color: #dcdcdc;
                padding: 5px;
            }
        }

        #universityBox{
            transition: transform 1s ease-in-out;
            input{
                width: 300px;
                height: 20px;
                position: absolute;
                top: 100%;
                background-color: #dcdcdc;
                transform: translate(-39%, -700%);
                border-radius: 5px;
                padding: 10px;
            }

            #universityList {
                position: absolute;
                top: 100%;
                background-color: #dcdcdc;
                transform: translate(-38%, -100%);
                border-radius: 5px;
                padding: 10px;
                margin-left: 5px;
                width: 300px;
                height: 200px;
                overflow: scroll;
            }
        }
        

        #selectionCategory{

        }

    }


    
`
