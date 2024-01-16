import styled from "styled-components";
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.label`
  margin: 8px 0;
  font-size: 16px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  font-size: 14px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  font-size: 14px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin: 16px 0;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const EnglishContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const JapaneseContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ChineseContainer = styled.div`
  display: flex;
  flex-direction: column;
`;