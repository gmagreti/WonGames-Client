import { useRouter } from 'next/dist/client/router'

import { initializeApollo } from 'utils/apollo'

import Game, { GameTemplateProps } from 'templates/Game'

import galleryMock from 'components/Gallery/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/queries/games'
import { GetStaticProps } from 'next'
import {
  QueryGameBySlug,
  QueryGameBySlugVariables
} from 'graphql/generated/QueryGameBySlug'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import {
  QueryUpcoming,
  QueryUpcomingVariables
} from 'graphql/generated/QueryUpcoming'
import { QUERY_UPCOMING } from 'graphql/queries/upcoming'

const apolloCLient = initializeApollo()

export default function Index(props: GameTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return <Game {...props} />
}

export async function getStaticPaths() {
  const { data } = await apolloCLient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  const paths = data.games.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  //Get game data
  const { data } = await apolloCLient.query<
    QueryGameBySlug,
    QueryGameBySlugVariables
  >({
    query: QUERY_GAME_BY_SLUG,
    variables: { slug: `${params?.slug}` }
  })
  if (!data.games.length) {
    return { notFound: true }
  }

  const game = data.games[0]

  // Get recommendedGames
  const { data: recommended } = await apolloCLient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  // Get upcoming games and highlight
  const TODAY = new Date().toISOString().slice(0, 10)
  const { data: upcoming } = await apolloCLient.query<
    QueryUpcoming,
    QueryUpcomingVariables
  >({
    query: QUERY_UPCOMING,
    variables: { date: '2021-06-21' }
  })
  return {
    props: {
      revalidate: 60,
      cover: game.cover!.src,
      gameInfo: {
        id: game.id,
        title: game.name,
        price: game.price,
        description: game.short_description
      },
      gallery: game.gallery,
      description: game.description,
      details: {
        developer: game.developers[0].name,
        releaseDate: game.release_date,
        platforms: game.platforms.map((platform) => platform.name),
        publisher: game.publisher?.name,
        rating: game.rating,
        genres: game.categories.map((category) => category.name)
      },
      upcommingGames: gamesMapper(upcoming.upcomingGames),
      upcommingHighlight: highlightMapper(
        upcoming.showcase?.upcomingGames?.highlight
      ),
      recommendedGames: gamesMapper(recommended.recommended?.section?.games)
    }
  }
}
