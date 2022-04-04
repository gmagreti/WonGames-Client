import Base from 'templates/Base'

import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import { Container } from 'components/Container'
import BannerSlider from 'components/BannerSlider'
import Showcase from 'components/Showcase'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighligth: HighlightProps

  freeGames: GameCardProps[]
  freeHighligth: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingHighligth,
  freeGames,
  freeHighligth
}: HomeTemplateProps) => {
  return (
    <Base>
      <Container>
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Showcase title="News" games={newGames} color="black" />
      </S.SectionNews>

      <Showcase
        title="Most Popular"
        color="white"
        headingColor="white"
        highlight={mostPopularHighlight}
        games={mostPopularGames}
      />

      <Showcase
        title="Upcomming"
        color="white"
        headingColor="white"
        games={upcommingGames}
        highlight={upcommingHighligth}
      />
      <Showcase
        title="Free games"
        color="white"
        headingColor="white"
        highlight={freeHighligth}
        games={freeGames}
      />
    </Base>
  )
}

export default Home
