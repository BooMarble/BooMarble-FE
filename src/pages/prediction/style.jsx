import styled from 'styled-components';

export const FormContainer = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border-radius: 20px;
  background-color: #eeeeee;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  & > div {
    flex: 1;
    margin-right: 16px;

    &:last-child {
      margin-right: 0;
    }
  }
`;