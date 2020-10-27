import React from "react";
import * as S from "./InputField.style";

function InputField({ type, placeholder, defaultValue, handleChange }) {
  switch (type) {
    case "longtext":
      return (
        <S.TextArea
          placeholder={placeholder}
          value={defaultValue}
          onChange={handleChange}
        ></S.TextArea>
      );
    case "number":
      return (
        <S.Input
          type="number"
          placeholder={placeholder}
          onChange={handleChange}
        />
      );
    default:
      return (
        <S.Input
          type="text"
          placeholder={placeholder}
          onChange={handleChange}
        />
      );
  }
}

export default InputField;
