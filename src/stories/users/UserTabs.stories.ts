import { UserTabs } from "@/components/UserTabs/UserTabs";
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Users/UserTabs',
    component: UserTabs,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof UserTabs>

export default meta;
type Story = StoryObj<typeof meta>


export const Primary: Story = {
    args: {
        messages: [{
            messages: 'Esto es un mensaje de prueba',
            name: 'Anakin Skywalker',
            username: 'darthvader',
            repliesCount: 10
        }],
        replies: [{
            messages: 'Esto es una respuesta de prueba',
            name: 'Anakin Skywalker',
            username: 'darthvader',
            repliesCount: 10
        }]
    }
}