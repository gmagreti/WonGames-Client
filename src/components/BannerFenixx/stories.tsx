import { Story, Meta } from '@storybook/react'
import BannerFenixx, { BannerProps } from '.'

const items = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 1',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x582',
    title: 'Defy death 2',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x581',
    title: 'Defy death 3',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season'
  }
]

export default {
  title: 'BannerFenixx',
  component: BannerFenixx,
  args: { items },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <BannerFenixx {...args} />
  </div>
)
