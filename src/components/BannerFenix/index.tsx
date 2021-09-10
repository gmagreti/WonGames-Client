import BannerFenixx, { BannerProps } from 'components/BannerFenixx'
import SliderFenix, { SliderSettings } from 'components/SliderFenix'

import items from './mock'

import * as S from './styles'

export type BannerFenixProps = {
  items: BannerProps[]
}

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 1170,
      settings: {}
    }
  ]
}

const BannerFenix = ({ items }: BannerFenixProps) => (
  <S.Wrapper>
    <SliderFenix settings={settings}>
      {items.map((item) => (
        <BannerFenixx key={item.title} {...item} />
      ))}
    </SliderFenix>
  </S.Wrapper>
)

export default BannerFenix
