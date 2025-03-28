import { Message } from "@/components/messages/Mesagges";
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Messages/Message',
    component: Message,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof Message>

export default meta;
type Story = StoryObj<typeof meta>


export const Primary: Story = {
    args: {
        message: {
            messages: 'Esto es un mensaje de prueba',
            name: 'Anakin Skywalker',
            username: 'darthvader',
            repliesCount: 10
        }
    }
}