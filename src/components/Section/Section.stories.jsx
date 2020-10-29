import { storiesOf } from "@storybook/react";
import React from "react";
import Section from "./Section";
import theme from "../../theme";
import { ThemeProvider } from "styled-components";

storiesOf("Section", module)
  .add("Full-width Section", () => (
    <ThemeProvider theme={theme}>
      <Section background="eee" fullWidth={true}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat optio
        cumque vel, porro saepe voluptatem aliquid consequatur, sed dignissimos,
        dicta in illo officiis pariatur. Pariatur maxime molestiae reiciendis
        odit autem!
      </Section>
    </ThemeProvider>
  ))
  .add("Fixed-width Section", () => (
    <ThemeProvider theme={theme}>
      <Section background="eee" fullWidth={false}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat optio
        cumque vel, porro saepe voluptatem aliquid consequatur, sed dignissimos,
        dicta in illo officiis pariatur. Pariatur maxime molestiae reiciendis
        odit autem!
      </Section>
    </ThemeProvider>
  ))
  .add("Fixed-width-Transparent Section", () => (
    <ThemeProvider theme={theme}>
      <Section fullWidth={false}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat optio
        cumque vel, porro saepe voluptatem aliquid consequatur, sed dignissimos,
        dicta in illo officiis pariatur. Pariatur maxime molestiae reiciendis
        odit autem!
      </Section>
    </ThemeProvider>
  ));
