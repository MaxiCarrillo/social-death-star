import { ExploreTrending } from "@/components/explore/ExploreTrending";
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Explore/ExploreTrending',
    component: ExploreTrending,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof ExploreTrending>

export default meta;
type Story = StoryObj<typeof meta>


export const Primary: Story = {
    args: {
        hashtags: [
            {
                hashtag: 'Tatooine',
                count: 12
            },
            {
                hashtag: 'Coruscant',
                count: 4
            }
        ]
    }
}

export const MoreThan3: Story = {
    args: {
        hashtags: [
            {
                hashtag: 'Tatooine',
                count: 12
            },
            {
                hashtag: 'Coruscant',
                count: 4
            },
            {
                hashtag: 'Mustafar',
                count: 1
            }
        ]
    }
}

export const Empty: Story = {
    args: {
        hashtags: []
    }
}
