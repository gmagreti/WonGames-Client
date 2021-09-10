import * as S from './styles'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
}

const BannerFenixx = ({ img, title, subtitle }: BannerProps) => (
  <S.Wrapper>
    <S.ImageWrapper>
      <img src={img} alt={title} />
    </S.ImageWrapper>

    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
    </S.Caption>
  </S.Wrapper>
)

export default BannerFenixx
