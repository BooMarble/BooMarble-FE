import styled from 'styled-components';

export const UniversityInfoContainer = styled.div`
  padding: 20px;
  padding-top: 2px;
  max-width: 500px;
  margin: 0 auto;
`;

export const DropdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;


export const CountryDropdown = styled.select`
  flex: 1;
  margin: 8px;
  border: none;
  border-radius: 4px;
  background-color: #eeeeee;
  font-size: 16px;
  max-width: 70px;
  border-radius: 20px;
  text-align: center;
  height: 30px;

`;

export const UniversityDropdown = styled.select`
flex: 1;
margin: 8px;
border: none;
border-radius: 4px;
background-color: #eeeeee;
font-size: 16px;
max-width: 90px;
border-radius: 20px;
text-align: center;
`;

export const TypeDropdown = styled.select`
flex: 1;
margin: 8px;
border: none;
border-radius: 4px;
background-color: #eeeeee;
font-size: 16px;
max-width: 90px;
border-radius: 20px;
text-align: center;
`;

export const UniversityList = styled.ul`
  list-style-type: none;
  padding: 0;
  overflow: auto;
  max-height: 530px;
`;
//border: none;
//border-radius: 10px;
//margin-bottom: 10px;
//padding: 10px;
//background-color: #eeeeee;
export const UniversityListItem = styled.li`
padding-top: 5px;
padding-bottom: 5px;
padding-left: 10px;
padding-right: 10px;
background-color: #eeeeee;
border-radius: 10px;
margin-top: 15px;
b{
    font-size: 150%;
    font-weight: bold;
    margin: 0;
    padding-top: 15px;
    padding-bottom: 0;
    padding-left: 15px;
    padding-right: 15px; 
}
`; 
export const LinkStyle = styled.a`
  text-decoration: none;
  color: #333;
  &:hover {
    color: #007bff;
  }
`;