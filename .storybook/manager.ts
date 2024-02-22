import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";
import { defaultColors } from "../lib/utils/constants";

addons.setConfig({
  theme: create({
    base: "dark",
    brandTitle: "Lina's Design System",
    brandImage: "/lina-ds-logo.png",

    colorPrimary: defaultColors.brandColor,
    colorSecondary: defaultColors.brandAccent,
    appBg: defaultColors.darkShades,
    appBorderColor: defaultColors.brandColor,
    appBorderRadius: 16,
    textColor: defaultColors.lightShades,
    barHoverColor: defaultColors.brandColor,
  }),
});
