import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 20px auto;
`;

export const DetailWrapper = styled.div`
  margin-top: 20px;
  overflow: auto;
  max-height: 550px;
`;

export const MainDetailsWrapper = styled.div`
  background-color: #EEEEEE;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #f9f9f9;
  }
  h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #333;

  }

  p {
    font-size: 16px;
    color: #555;
    margin-bottom: 15px;
  }
`;

export const RequirementWrapper = styled.div`
background-color: #EEEEEE;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #f9f9f9;
  }
  h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    font-size: 16px;
    color: #555;
    margin-bottom: 15px;
  }
`;

export const EnglishContainer = styled.div`


  h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    font-size: 16px;
    color: #555;
    margin-bottom: 15px;
  }
`;

export const JapaneseContainer = styled.div`
  h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    font-size: 16px;
    color: #555;
    margin-bottom: 15px;
  }
`;

export const ChineseContainer = styled.div`
  h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #333;
  }

  ul {
    padding-left: 20px;
  }

  li {
    font-size: 16px;
    color: #555;
    margin-bottom: 10px;
  }
`;

export const CostWrapper = styled.div`
background-color: #EEEEEE;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #f9f9f9;
  }
  h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #333;
    cursor: pointer;
  }

  p {
    font-size: 16px;
    color: #555;
    margin-bottom: 15px;
    display: none;
  }
`;
//h3.active + p {
//   display: block;
//  }
//`;
export const ExtradetailWrapper = styled.div`
overflow: auto;
background-color: #EEEEEE;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #f9f9f9;
  }
  h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    font-size: 16px;
    color: #555;
    margin-bottom: 15px;
  }
`;
