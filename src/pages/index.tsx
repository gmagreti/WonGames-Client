import Home, { HomeTemplateProps } from 'templates/Home'
import { bannerMapper, gamesMapper, highlightMapper } from 'utils/mappers'
// import gamesMock from 'components/GameCardSlider/mock'
import { initializeApollo } from 'utils/apollo'
import { QueryHome, QueryHomeVariables } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  // const TODAY = new Date().toISOString().slice(0, 10)
  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apolloClient.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: { date: '2021-06-21' }
  })

  const { data } = await apolloClient.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: { date: '2021-06-21' }
  })

  return {
    props: {
      revalidate: 10,
      banners: bannerMapper(banners),
      newGames: gamesMapper(newGames),
      mostPopularHighlight: highlightMapper(sections?.popularGames?.highlight),
      mostPopularGames: gamesMapper(sections!.popularGames!.games),
      upcommingHighligth: highlightMapper(sections?.upcomingGames?.highlight),
      upcomingGames: gamesMapper(upcomingGames),
      freeGames: gamesMapper(freeGames),
      freeHighlight: highlightMapper(sections?.freeGames?.highlight)
    }
  }
}
