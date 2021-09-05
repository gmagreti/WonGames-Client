import { Story, Meta } from '@storybook/react'
import CartList from '.'

export default {
  title: 'CartList',
  component: CartList
} as Meta

export const Default: Story = () => <CartList />
