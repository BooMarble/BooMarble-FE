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
                top: 100%;
                background-color: #eeeeee;
                transform: translate(-14%, -880%);
                border-radius: 5px;
                padding: 10px;
                margin-left: 10px;
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
                p:nth-child(1){
                    padding: 0;
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
                top: 100%;
                background-color: #eeeeee;
                transform: translate(-41%, -880%);
                border-radius: 5px;
                padding: 10px;
                margin-left: 10px;
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
                p:nth-child(1){
                    padding: 0;
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
                top: 100%;
                background-color: #eeeeee;
                transform: translate(-68%, -880%);
                border-radius: 5px;
                padding: 10px;
                margin-left: 10px;
            }

            #selectionCategoryList {
                position: absolute;
                top: 100%;
                background-color: #eeeeee;
                transform: translate(-64%, -134%);
                border-radius: 5px;
                padding: 10px;
                margin-left: 5px;
                width: 300px;
                height: 200px;
                overflow: scroll;
                p:nth-child(1){
                    padding: 0;
                    margin-top: 0;
                }
            }
        }                
        
    }

    #sorting{
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
    }

    #reviewBox{
        #firstUniv{
            padding-top: 5px;
            padding-bottom: 5px;
            padding-left: 10px;
            padding-right: 10px;
            background-color: #eeeeee;
            border-radius: 10px;
            margin-left: 15px;
            margin-right: 15px;
            margin-top: 15px;           
        }
        #firstUniv > p:nth-child(1){
            font-size: 150%;
            font-weight: bold;
            margin: 0;
            padding-top: 15px;
            padding-bottom: 0;
            padding-left: 15px;
            padding-right: 15px;
        }
        #firstUniv > p:nth-child(2){
            font-size: 90%;
            margin-left: 70%;
            margin-top: 0;
            margin-bottom: 0;
            background-color: #dcdcdc;
            border-radius: 13px;
            padding-top: 5px;
            padding-bottom: 5px;
            padding-left: 10px;
            margin-right: 25px;
        }
        #firstTags{
            display: flex;
            flex-direction: row;
            margin-bottom: 15px;
            margin-left: 15px;
        }
        #firstTags > p:nth-child(1){
            font-weight: normal;
            font-size: 100%;
            margin-right: 10px;
            margin-top: 0;
            margin-bottom: 0; 
        }
        #firstTags > p:nth-child(2){
            margin: 0;
            font-size: 100%;
        }

        #secondUniv{
            padding-top: 5px;
            padding-bottom: 5px;
            padding-left: 10px;
            padding-right: 10px;
            background-color: #eeeeee;
            border-radius: 10px;
            margin-left: 15px;
            margin-right: 15px;
            margin-top: 15px;     
        }
        #secondUniv > p:nth-child(1){
            font-size: 150%;
            font-weight: bold;
            margin: 0;
            padding-top: 15px;
            padding-bottom: 0;
            padding-left: 15px;
            padding-right: 15px;
        }
        #secondUniv > p:nth-child(2){
            font-size: 90%;
            margin-left: 70%;
            margin-top: 0;
            margin-bottom: 0;
            background-color: #dcdcdc;
            border-radius: 13px;
            padding-top: 5px;
            padding-bottom: 5px;
            padding-left: 10px;
            margin-right: 25px;
        }
        #secondTags{
            display: flex;
            flex-direction: row;
            margin-bottom: 15px;
            margin-left: 15px;
        }
        #secondTags > p:nth-child(1){
            font-weight: normal;
            font-size: 100%;
            margin-right: 10px;
            margin-top: 0;
            margin-bottom: 0; 
        }
        #secondTags > p:nth-child(2){
            margin: 0;
            font-size: 100%;
        }
        #thirdUniv{
            padding-top: 5px;
            padding-bottom: 5px;
            padding-left: 10px;
            padding-right: 10px;
            background-color: #eeeeee;
            border-radius: 10px;
            margin-left: 15px;
            margin-right: 15px;
            margin-top: 15px;   
        }
        #thirdUniv > p:nth-child(1){
            font-size: 150%;
            font-weight: bold;
            margin: 0;
            padding-top: 15px;
            padding-bottom: 0;
            padding-left: 15px;
            padding-right: 15px;
        }
        #thirdUniv > p:nth-child(2){
            font-size: 90%;
            margin-left: 70%;
            margin-top: 0;
            margin-bottom: 0;
            background-color: #dcdcdc;
            border-radius: 13px;
            padding-top: 5px;
            padding-bottom: 5px;
            padding-left: 10px;
            margin-right: 25px;            
        }
        #thirdTags{
            display: flex;
            flex-direction: row;
            margin-bottom: 15px;
            margin-left: 15px;
        }
        #thirdTags > p:nth-child(1){
            font-weight: normal;
            font-size: 100%;
            margin-right: 10px;
            margin-top: 0;
            margin-bottom: 0;             
        }
        #thirdTags > p:nth-child(2){
            margin: 0;
            font-size: 100%;            
        }
    }

    button{
        border: 2px solid #dcdcdc;
        background-color: white;
        border-radius: 15px;
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 10px;
        padding-right: 10px;
        display: block;
        margin: 0 auto;
        margin-top: 50px;
    }

    
`