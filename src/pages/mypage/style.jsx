// style.jsx
import styled from 'styled-components';

export const StyledBody = styled.div`
  font-family: 'Arial', sans-serif;
  margin: 20px;
  overflow: auto;
  max-height: 530px;

  h1 {
    color: #333;
    text-align: center;
  }

  div {
    margin-top: 20px;
  }

  div > div {
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
  }

  h2 {
    color: #555;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: inline-block;
    margin-right: 10px;
    background-color: #f0f0f0;
    padding: 5px 10px;
    border-radius: 5px;
  }
`;
