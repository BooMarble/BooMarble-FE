import styled from "styled-components";

export const ReviewBody = styled.div`
    max-width: 500px;
    z-index: 1;

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
        background-color: #eeeeee;
    }

    #dropdownContainer{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        padding-left: 50px;
        padding-right: 50px;

        #country{
            p:nth-child(1){
                border-radius: 20px;
                background-color: #eeeeee;
                padding-top: 5px;
                padding-bottom: 5px;
                padding-left: 10px;
                padding-right: 10px;
            }
        }
        
        #countryBox{
            transition: transform 1s ease-in-out;
            input{
                width: 300px;
                height: 20px;
                position: absolute;
                top: 105%;
                background-color: #eeeeee;
                transform: translate(-12%, -880%);
                border-radius: 5px;
                padding: 10px;
                margin-left: 10px;
                z-index: 4;
                border: 2px solid #dcdcdc;
            }

            #countryList {
                position: absolute;
                top: 100%;
                background-color: #eeeeee;
                transform: translate(-10%, -134%);
                border-radius: 5px;
                padding: 10px;
                margin-left: 5px;
                width: 300px;
                height: 200px;
                overflow: scroll;
                z-index: 3;
                border: 2px solid #dcdcdc;
                p:nth-child(1){
                    padding-top: 20px;
                    padding-bottom: 0;
                    padding-left: 0;
                    padding-right: 0;
                    margin-top: 0;
                }
            }
        }            
    

        #university{
            p:nth-child(1){
                border-radius: 20px;
                background-color: #eeeeee;
                padding-top: 5px;
                padding-bottom: 5px;
                padding-left: 10px;
                padding-right: 10px;
            }
        }

        #universityBox{
            transition: transform 1s ease-in-out;
            input{
                width: 300px;
                height: 20px;
                position: absolute;
                top: 105% !important;
                background-color: #eeeeee;
                transform: translate(-39%, -880%);
                border-radius: 5px;
                padding: 10px;
                margin-left: 10px;
                z-index: 4;
                border:none;
                font-size: 100%;
                border: 2px solid #dcdcdc;
            }            

            #universityList {
                position: absolute;
                top: 100%;
                background-color: #eeeeee;
                transform: translate(-37%, -134%);
                border-radius: 5px;
                padding: 10px;
                margin-left: 5px;
                width: 300px;
                height: 200px;
                overflow: scroll;
                z-index: 3;
                border: 2px solid #dcdcdc;
                p:nth-child(1){
                    padding-top: 20px;
                    padding-bottom: 0;
                    padding-left: 0;
                    padding-right: 0;
                    margin-top: 0;
                }
            }
        }
        

        #selectionCategory{
            p:nth-child(1){
                border-radius: 20px;
                background-color: #eeeeee;
                padding-top: 5px;
                padding-bottom: 5px;
                padding-left: 10px;
                padding-right: 10px;
            }
        }
               
        #selectionCategoryBox{
            transition: transform 1s ease-in-out;
            input{
                width: 300px;
                height: 20px;
                position: absolute;
                top: 105% !important;
                background-color: #eeeeee;
                transform: translate(-66%, -880%);
                border-radius: 5px;
                padding: 10px;
                margin-left: 10px;
                z-index: 4;
                border:none;
                font-size: 100%;
                border: 2px solid #dcdcdc;
            }

            #selectionCategoryList {
                position: absolute;
                top: 100%;
                background-color: #eeeeee;
                transform: translate(-64%, -134%);                
                border-radius: 5px;
                margin-left: 5px;
                padding: 10px;
                width: 300px;
                height: 200px;
                overflow: scroll;
                z-index: 3;
                border: 2px solid #dcdcdc;

                p{
                    margin: 0;
                }

                p:nth-child(1){
                    background-color: white;
                }
            }
        }                
        
    }

    #sorting{
        position: relative;
        display: flex;
        justify-content: right;
        p:nth-child(1){
            background-color: #dcdcdc;
            padding: 5px;
            border-radius: 5px;
        }
        p:nth-child(3){

        }        
    }

    #sortingList{
        position: absolute;
        background-color: white;
        border-radius: 5px;
        transform: translate(0%, 80%);
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

    #reviewBox{
        margin: 0 auto;
        height: 530px;
        margin-left: 15px;
        margin-right: 15px;
        overflow: scroll;
        div{
            padding-top: 5px;
            padding-bottom: 5px;
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
            p:nth-child(2){
                width: 55px;
                font-size: 90%;
                margin-left: 70%;
                margin-top: 0;
                margin-bottom: 0;
                background-color: #dcdcdc;
                border-radius: 13px;
                padding-top: 5px;
                padding-bottom: 5px;
                padding-left: 10px;             
            }
            div:nth-child(3){
                display: flex;
                flex-direction: row;
                margin-bottom: 15px;
                margin-left: 15px;   
                margin-top: 3px; 
            }
            div:nth-child(3) p:nth-child(1) {
                    font-weight: normal;
                    font-size: 100%;
                    margin-right: 10px;
                    margin-top: 0;
                    margin-bottom: 0; 
                    padding: 0;   
            }
            div:nth-child(3) p:nth-child(2){
                    margin: 0;
                    font-size: 100%;
                    background-color: transparent;
                    padding: 0;
                    width: calc((100% - 10px)* 0.6);
            }
        }
    }

`