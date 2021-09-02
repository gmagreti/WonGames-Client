import { Story, Meta } from '@storybook/react'
import GameDetails, { GameDetailsProps } from '.'

import GameDetailMock from './mock'

export default {
  title: 'GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: GameDetailMock,
  argTypes: {
    releaseDate: {
      control: 'date'
    },
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac']
      }
    },
    genres: {
      control: {
        type: 'inline-check',
        options: ['Action', 'Adventure', 'Terror']
      }
    }
  }
} as Meta

export const Default: Story<GameDetailsProps> = (args) => (
  <div>
    <GameDetails {...args} />
  </div>
)
