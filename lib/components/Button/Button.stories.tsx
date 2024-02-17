import type { Meta, StoryObj } from "@storybook/react";
import { disableStorybookArg } from "../../utils/constants";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  args: { style: { marginRight: 8 } },
  argTypes: { style: disableStorybookArg },
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
      <Button color="primary" {...arg}>
        Primary
      </Button>
      <Button color="secondary" {...arg}>
        Secondary
      </Button>
      <Button color="success" {...arg}>
        Success
      </Button>
      <Button color="error" {...arg}>
        Error
      </Button>
      <Button color="warning" {...arg}>
        Warning
      </Button>
      <Button color="info" {...arg}>
        Info
      </Button>
    </>
  ),
};

export const Variants: Story = {
  argTypes: { variant: disableStorybookArg },
  render: (arg) => (
    <>
      <Button variant="contained" {...arg}>
        Contained
      </Button>
      <Button variant="outlined" {...arg}>
        Outlined
      </Button>
      <Button variant="text" {...arg}>
        Text
      </Button>
    </>
  ),
};

export const Sizes: Story = {
  argTypes: { size: disableStorybookArg },
  render: (arg) => (
    <>
      <Button size="large" {...arg}>
        Large
      </Button>
      <Button size="medium" {...arg}>
        Medium
      </Button>
      <Button size="small" {...arg}>
        Small
      </Button>
    </>
  ),
};

export const Disabled: Story = {
  argTypes: { disabled: disableStorybookArg },
  render: (arg) => (
    <>
      <Button disabled variant="contained" {...arg}>
        Disabled Contained
      </Button>
      <Button disabled variant="outlined" {...arg}>
        Disabled Outlined
      </Button>
      <Button disabled variant="text" {...arg}>
        Disabled Text
      </Button>
    </>
  ),
};
