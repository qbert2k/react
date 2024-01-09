import {MyLabel} from "../components/MyLabel";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: 'UI/labels/MyLabel',
    component: MyLabel,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};