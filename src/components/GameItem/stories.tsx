import { Story, Meta } from '@storybook/react'
import GameItem from '.'

export default {
  title: 'GameItem',
  component: GameItem
} as Meta

export const Default: Story = () => <GameItem />
