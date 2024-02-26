import type { Preview } from "@storybook/react";
import React, { useEffect } from "react";
import { useTheme } from "../lib/context/ThemeContext";
import { ThemeProvider } from "../lib/context/ThemeProvider";
import TemplateDocs from "../lib/stories/template.mdx";

const withThemeProvider = (Story) => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
);

const withThemeContext = (Story, context) => {
  const { setTheme } = useTheme();

  useEffect(() => {
    const { value } = context.globals.backgrounds || {};
    if (value) setTheme(value === "#F8F8F8" ? "light" : "dark");
  }, [context.globals.backgrounds]);

  return <Story />;
};

const preview: Preview = {
  decorators: [withThemeContext, withThemeProvider],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: { default: "dark" },
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
