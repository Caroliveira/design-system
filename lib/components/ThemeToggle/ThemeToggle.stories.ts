import type { Meta, StoryObj } from "@storybook/react";
import { ThemeToggle } from ".";

const meta = {
  component: ThemeToggle,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
