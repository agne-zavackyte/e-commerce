import { storiesOf } from "@storybook/react";
import React from "react";
import InputField from "./InputField";
import theme from "../../theme";
import { ThemeProvider } from "styled-components";

storiesOf("Input", module)
  .add("Text Field", () => (
    <ThemeProvider theme={theme}>
      <InputField
        type="text"
        placeholder="Name"
        handleChange={(e) => console.log(e.target.value)}
      />
    </ThemeProvider>
  ))
  .add("Number Field", () => (
    <ThemeProvider theme={theme}>
      <InputField
        type="number"
        step="0.1"
        placeholder="Number"
        handleChange={(e) => console.log(e.target.value)}
      />
    </ThemeProvider>
  ))
  .add("Long Text Field", () => (
    <ThemeProvider theme={theme}>
      <InputField
        type="longtext"
        placeholder="This is a textarea"
        handleChange={(e) => console.log(e.target.value)}
      />
    </ThemeProvider>
  ))
  .add("Dropdown Field", () => (
    <ThemeProvider theme={theme}>
      <InputField
        type="dropdown"
        handleChange={(e) => console.log(e.target.value)}
        options={[
          { name: "Vilnius", value: "vilnius" },
          { name: "Kaunas", value: "kaunas" },
          { name: "Klaipėda", value: "klaipėda" },
        ]}
      ></InputField>
    </ThemeProvider>
  ));
