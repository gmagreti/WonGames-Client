import Banner, { BannerProps } from 'components/Banner'
import BannerFenixx from 'components/BannerFenixx'
import Slider, { SliderSettings } from 'components/Slider'

import items from './mock'

import * as S from './styles'

export type BannerSliderProps = {
  items: BannerProps[]
}

const settings: SliderSettings = {
  dots: true,
  arrows: true,
  vertical: false,
  verticalSwiping: false,
  infinite: false,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
}

const BannerSlider = ({ items }: BannerSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item) => (
        <BannerFenixx key={item.title} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default BannerSlider
