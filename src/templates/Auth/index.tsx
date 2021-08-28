import Link from 'next/link'

import Logo from 'components/Logo'
import Heading from 'components/Heading'

import * as S from './styles'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <S.BannerContent>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <div>
          <Heading color="white" size="huge">
            All your favorite games in one place
          </Heading>
          <S.Subtitle>
            <strong>WON</strong> is the best and most complete gamming
          </S.Subtitle>
        </div>

        <S.Footer>Won Games 2021 Todos os Direitos Reservados</S.Footer>
      </S.BannerContent>
    </S.BannerBlock>

    <S.Content>
      <S.ContentWrapper>
        <Link href="/">
          <a>
            <Logo id="content" color="black" size="large" />
          </a>
        </Link>
        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>
        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
)

export default Auth
