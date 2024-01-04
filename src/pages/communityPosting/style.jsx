import styled from "styled-components";

export const PostBody = styled.div`
    margin-top: 20px;
    margin-left: 10px;
    display: flex;
    form{
          input:nth-child(1){
            border: none;
            outline: none;
            display: block;
            margin-bottom: 10px;
            font-size: 150%;
            border-bottom: 1px solid #000;
            margin-bottom: 15px !important;
            width: 300px;
          }
          textarea{
            border: none;
            outline: none;
            display: block;
            font-size: 150%;
            width: 300px;
            height: 200px;
            overflow: scroll;
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
          
          #hashTagBox{
            margin-bottom: 10px;
            p:nth-child(1){
              font-size: 120%;
              margin-top: 0;
              margin-bottom: 10px;
            }
          }

          #hashTags{
            display: flex;
            flex-direction: column;
            border: 2px solid #2b292936;
            border-radius: 10px;
            overflow: scroll;
            height: 200px;
            input{
              display: block;
              border: none;
              outline: none;
              font-size: 120%;
              margin-top: 3px;
              margin-left: 5px;
              margin-right: 5px;
              margin-bottom: 5px;
              display: block;
            }
          }

          #hashTag{
            display: block;
            margin-left: 5px;
            p {
              margin-right: 0;
              display: inline-block;
              background-color: #eeeeee;
              border-radius: 5px;
              padding: 7px;
              margin-top: 5px !important;
              margin-bottom: 0 !important;
            }
          }
          button{
            appearance: none;
            padding: 7px;
            color: black;
            border: none;
            border-radius: 15px;
            font-size: 120%;
            background-color: #eeeeee;
            margin-top: 10px;
            display: block;
            margin: 0 auto;
          }
    }
`


