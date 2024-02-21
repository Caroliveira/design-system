import type { Preview } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "../lib/context/ThemeProvider";
import TemplateDocs from "../lib/stories/template.mdx";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider fixedTheme="light">
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: { page: TemplateDocs },
  },
};

export default preview;
