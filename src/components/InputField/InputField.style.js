import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 0 10px;
  height: ${(props) => props.theme.standart.height};
  border: 1px solid ${(props) => props.theme.secondary.background};
  border-radius: 5px;
  outline: none;
  box-sizing: border-box;
  &:focus {
    border: 1px solid #000000;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: ${(props) => props.theme.standart.height};
  padding: 0 10px;
  border: 1px solid ${(props) => props.theme.secondary.background};
  border-radius: 5px;
  outline: none;
  box-sizing: border-box;
  ::placeholder {
    font-style: italic;
  }
  &:focus {
    border: 1px solid #000000;
  }
`;

export const Dropdown = styled.select`
  width: 100%;
  padding: 0 10px;
  height: ${(props) => props.theme.standart.height};
  border: 1px solid ${(props) => props.theme.secondary.background};
  border-radius: 5px;
  outline: none;
  box-sizing: border-box;
  &:focus {
    border: 1px solid #000000;
  }
`;
