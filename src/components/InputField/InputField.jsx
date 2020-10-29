import React from "react";
import * as S from "./InputField.style";

function InputField({
  type,
  placeholder,
  defaultValue,
  handleChange,
  options,
}) {
  switch (type) {
    case "longtext":
      return (
        <S.TextArea
          placeholder={placeholder}
          value={defaultValue}
          onChange={handleChange}
        ></S.TextArea>
      );
    case "dropdown":
      return (
        <S.Dropdown onChange={handleChange} defaultValue>
          <option disabled value>
            Select a city
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </S.Dropdown>
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
