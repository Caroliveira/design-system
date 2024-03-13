import type { Meta, StoryObj } from "@storybook/react";
import { disableStorybookArg } from "../../utils/constants";
import moon from "../../../public/moon.svg";
import sun from "../../../public/sun.svg";

import { Switch } from ".";

const meta: Meta<typeof Switch> = {
  component: Switch,
  tags: ["autodocs"],
  args: { color: "primary", disabled: false, defaultChecked: true },
  argTypes: { onIcon: disableStorybookArg, offIcon: disableStorybookArg },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { "aria-label": "Default switch" },
};

export const Colors: Story = {
  argTypes: { color: disableStorybookArg },
  render: (arg) => (
    <>
      <Switch {...arg} color="primary" />
      <Switch {...arg} color="secondary" />
      <Switch {...arg} color="success" />
      <Switch {...arg} color="error" />
      <Switch {...arg} color="warning" />
      <Switch {...arg} color="info" />
    </>
  ),
};

export const Disabled: Story = {
  argTypes: { disabled: disableStorybookArg },
  render: (arg) => (
    <>
      <Switch {...arg} aria-label="Enabled switch" />
      <Switch {...arg} aria-label="Disabled switch" disabled />
    </>
  ),
};

export const WithIcon: Story = {
  args: { onIcon: sun, offIcon: moon },
};
