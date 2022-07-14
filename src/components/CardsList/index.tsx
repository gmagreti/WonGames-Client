/* eslint-disable @next/next/no-img-element */
import Heading from 'components/Heading'
import { PaymentCard } from 'components/PaymentOptions'
import * as S from './styles'

export type CardsListProps = {
  cards?: PaymentCard[]
  total: string
  hasButton?: boolean
}

const CardsList = ({ cards, total, hasButton = false }: CardsListProps) => (
  <>
    <Heading lineBottom color="black" size="small">
      My cards
    </Heading>

    {cards?.map((card) => (
      <S.Card key={card.number}>
        <img src={card.img} alt={card.flag} />
        <span>{card.number}</span>
      </S.Card>
    ))}
  </>
)

export default CardsList
