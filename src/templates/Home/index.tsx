import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'

import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Menu from 'components/Menu'
import Highlight, { HighlightProps } from 'components/Highlight'
import BannerSlider from 'components/BannerSlider'
import GameCardSlider from 'components/GameCardSlider'
import Showcase from 'components/Showcase'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighligth: HighlightProps
  upcommingMoreGames: GameCardProps[]
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
  upcommingMoreGames,
  freeGames,
  freeHighligth
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
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

    <S.SectionUpcoming>
      <Showcase
        title="Upcomming"
        color="white"
        headingColor="white"
        games={upcommingGames}
      />
      <Showcase
        color="white"
        highlight={upcommingHighligth}
        games={upcommingMoreGames}
      />
    </S.SectionUpcoming>

    <Showcase
      title="Free games"
      color="white"
      headingColor="white"
      highlight={freeHighligth}
      games={freeGames}
    />

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home
