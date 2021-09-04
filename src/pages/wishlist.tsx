import Whishlist, { WishlistTemplateProps } from 'templates/Whishlist'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function WishlistPage({ ...props }: WishlistTemplateProps) {
  return <Whishlist {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      recommendedGames: gamesMock.slice(0, 4),
      recommendedHighlight: highlightMock
    }
  }
}
