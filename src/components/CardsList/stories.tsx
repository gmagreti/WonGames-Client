import { Story, Meta } from '@storybook/react'
import CardsList from '.'

export default {
  title: 'CardsList',
  component: CardsList
} as Meta

export const Default: Story = () => <CardsList />
