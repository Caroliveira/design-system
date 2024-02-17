import type { Meta, StoryObj } from "@storybook/react";
import { ThemeToggle } from ".";

const meta: Meta<typeof ThemeToggle> = {
  component: ThemeToggle,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
