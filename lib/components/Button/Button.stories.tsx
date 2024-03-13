import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import { disableStorybookArg } from "../../utils/constants";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  args: {
    color: "primary",
    variant: "contained",
    size: "medium",
    fullWidth: false,
    disabled: false,
  },
  argTypes: {
    variant: { control: "select" },
    size: { control: "select" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Button" },
};

export const Colors: Story = {
  argTypes: { color: disableStorybookArg },
  render: (arg) => (
    <>
      <Button {...arg} color="primary">
        Primary
      </Button>
      <Button {...arg} color="secondary">
        Secondary
      </Button>
      <Button {...arg} color="success">
        Success
      </Button>
      <Button {...arg} color="error">
        Error
      </Button>
      <Button {...arg} color="warning">
        Warning
      </Button>
      <Button {...arg} color="info">
        Info
      </Button>
    </>
  ),
};

export const Variants: Story = {
  argTypes: { variant: disableStorybookArg },
  render: (arg) => (
    <>
      <Button {...arg} variant="contained">
        Contained
      </Button>
      <Button {...arg} variant="outlined">
        Outlined
      </Button>
      <Button {...arg} variant="text">
        Text
      </Button>
    </>
  ),
};

export const Sizes: Story = {
  argTypes: { size: disableStorybookArg },
  render: (arg) => (
    <>
      <Button {...arg} size="large">
        Large
      </Button>
      <Button {...arg} size="medium">
        Medium
      </Button>
      <Button {...arg} size="small">
        Small
      </Button>
    </>
  ),
};

export const Disabled: Story = {
  argTypes: { disabled: disableStorybookArg },
  render: (arg) => (
    <>
      <Button {...arg} disabled variant="contained">
        Disabled Contained
      </Button>
      <Button {...arg} disabled variant="outlined">
        Disabled Outlined
      </Button>
      <Button {...arg} disabled variant="text">
        Disabled Text
      </Button>
    </>
  ),
};
